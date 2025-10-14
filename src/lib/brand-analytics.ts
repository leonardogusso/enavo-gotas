import { useEffect } from 'react';

/**
 * Interface para dados da calculadora
 */
interface CalculatorData {
  weight: number;
  ageMonths: number;
  doseMg: number;
  drops: number;
  category: string;
}

/**
 * Interface para dados de contato com representante
 */
interface RepContactData {
  name: string;
  specialty: string;
  crm: string;
  clinic: string;
  question: string;
}

/**
 * Interface para dados de download
 */
interface DownloadData {
  fileName: string;
  fileType: string;
}

/**
 * Sistema de Analytics para Enavo Gotas
 * Rastreia interações críticas para conversão e engajamento
 */
export const brandAnalytics = {
  /**
   * Rastreia uso da calculadora de dose
   * Evento crítico para conversão - médico está usando a ferramenta
   */
  trackCalculatorUsed: (data: CalculatorData) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'calculator_used', {
        event_category: 'Medical Tool',
        event_label: data.category,
        value: Math.round(data.drops), // Número de gotas como valor
        weight_kg: data.weight,
        age_months: data.ageMonths,
        dose_mg: data.doseMg,
        // Custom dimensions para segmentação avançada
        dimension1: data.category,
        dimension2: `${data.weight}kg`,
      });

      // Evento de conversão para Google Ads (se configurado)
      window.gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Substituir com ID real
        value: 1.0,
        currency: 'BRL',
      });

      console.log('✅ Analytics: Calculadora usada', data);
    }
  },

  /**
   * Rastreia erros na calculadora
   * Importante para identificar problemas de UX
   */
  trackCalculatorError: (errorType: string, data: any) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'calculator_error', {
        event_category: 'Error',
        event_label: errorType,
        error_data: JSON.stringify(data),
        non_interaction: true,
      });

      console.error('❌ Analytics: Erro na calculadora', errorType, data);
    }
  },

  /**
   * Rastreia engajamento com a calculadora
   * Tempo gasto e número de interações indica qualidade do lead
   */
  trackCalculatorEngagement: (timeSpent: number, interactions: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Só rastreia se houve engajamento significativo (>5s)
      if (timeSpent > 5) {
        window.gtag('event', 'calculator_engagement', {
          event_category: 'Engagement',
          event_label: 'time_and_interactions',
          time_spent_seconds: timeSpent,
          interaction_count: interactions,
          value: timeSpent, // Tempo como valor de engajamento
        });

        console.log('📊 Analytics: Engajamento calculadora', {
          timeSpent,
          interactions,
        });
      }
    }
  },

  /**
   * Rastreia contato com representante
   * LEAD QUENTE - médico demonstrou interesse em falar com especialista
   */
  trackRepContact: (data: RepContactData) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const leadScore = calculateLeadScore(data);

      window.gtag('event', 'rep_contact', {
        event_category: 'Lead Generation',
        event_label: data.specialty || 'specialty_not_provided',
        value: leadScore, // Score de qualidade do lead
        has_name: !!data.name,
        has_specialty: !!data.specialty,
        has_crm: !!data.crm,
        has_clinic: !!data.clinic,
        question_length: data.question.length,
        lead_score: leadScore,
      });

      // Conversão de Lead (evento crítico)
      window.gtag('event', 'generate_lead', {
        event_category: 'Conversion',
        event_label: 'whatsapp_contact',
        value: leadScore,
      });

      console.log('🎯 Analytics: Contato com representante (LEAD)', {
        leadScore,
        data,
      });
    }
  },

  /**
   * Rastreia downloads de materiais
   * Indica interesse em conteúdo técnico-científico
   */
  trackDownload: (fileName: string, fileType: string = 'PDF') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'file_download', {
        event_category: 'Content Download',
        event_label: fileName,
        file_type: fileType,
        value: 3, // Peso médio de conversão
      });

      console.log('📥 Analytics: Download', fileName);
    }
  },

  /**
   * Rastreia profundidade de scroll
   * Indica nível de interesse no conteúdo
   */
  trackScrollDepth: (percentage: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Rastreia apenas marcos importantes (25%, 50%, 75%, 100%)
      if ([25, 50, 75, 100].includes(percentage)) {
        window.gtag('event', 'scroll_depth', {
          event_category: 'Engagement',
          event_label: `${percentage}%`,
          value: percentage,
          non_interaction: percentage < 75, // Só interação se ler >75%
        });

        console.log(`📜 Analytics: Scroll ${percentage}%`);
      }
    }
  },

  /**
   * Rastreia microconversões
   * Pequenas ações que indicam progressão no funil
   */
  trackMicroConversion: (action: string, value: number = 1) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'micro_conversion', {
        event_category: 'Funnel Progress',
        event_label: action,
        value: value,
      });

      console.log('✨ Analytics: Microconversão', action);
    }
  },

  /**
   * Rastreia compartilhamento
   * Amplificação orgânica da marca
   */
  trackShare: (method: string = 'unknown') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'share', {
        event_category: 'Social',
        event_label: method,
        value: 5, // Alto valor - viralização
      });

      console.log('🔗 Analytics: Compartilhamento', method);
    }
  },

  /**
   * Rastreia acesso via QR Code
   * Importante para medir ROI de materiais impressos
   */
  trackQRAccess: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'qr_code_access', {
        event_category: 'Brand Engagement',
        event_label: 'Doctor accessed via QR Code',
        value: 2,
      });

      console.log('📱 Analytics: Acesso via QR Code');
    }
  },

  /**
   * Rastreia visualização de curso/webinar
   * Interesse em educação médica continuada
   */
  trackCourseClick: (courseName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'course_click', {
        event_category: 'Education',
        event_label: courseName,
        value: 4, // Alto valor - engajamento educacional
      });

      console.log('🎓 Analytics: Click em curso', courseName);
    }
  },
};

/**
 * Calcula score de qualidade do lead
 * Quanto mais informações, maior o score
 */
function calculateLeadScore(data: RepContactData): number {
  let score = 10; // Base

  if (data.name) score += 5;
  if (data.specialty) score += 10;
  if (data.crm) score += 15; // CRM é forte indicador de profissional ativo
  if (data.clinic) score += 10;
  if (data.question.length > 50) score += 10; // Pergunta detalhada
  if (data.question.length > 150) score += 10; // Muito engajado

  return score;
}

/**
 * Hook React para rastrear visualização de seção
 * Usa Intersection Observer para detectar quando seção está visível
 */
export const useSectionTracking = (sectionName: string) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'section_view', {
              event_category: 'Content Engagement',
              event_label: sectionName,
              non_interaction: true,
            });

            console.log(`👁️ Analytics: Seção visualizada - ${sectionName}`);
          }
        });
      },
      {
        threshold: 0.5, // 50% da seção visível
        rootMargin: '0px',
      }
    );

    const element = document.getElementById(sectionName);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionName]);
};

/**
 * Hook para rastrear tempo na página
 * Útil para medir qualidade do tráfego
 */
export const useTimeTracking = (pageName: string) => {
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);

      // Só rastreia se passou tempo significativo (>10s)
      if (timeSpent > 10 && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'time_on_page', {
          event_category: 'Engagement',
          event_label: pageName,
          value: timeSpent,
        });

        console.log(`⏱️ Analytics: Tempo na página ${pageName}: ${timeSpent}s`);
      }
    };
  }, [pageName]);
};

/**
 * TypeScript declarations para window.gtag
 */
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default brandAnalytics;
