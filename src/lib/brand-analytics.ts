// Sistema completo de analytics para recordação de marca médica
import { useEffect } from 'react';

// Utilitário principal para tracking de eventos médicos
export const brandAnalytics = {
  // Evento: Médico chegou via QR Code (métrica crítica)
  trackQRCodeAccess: (source?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'qr_code_access', {
        event_category: 'Brand Engagement',
        event_label: `QR Code from ${source || 'unknown'}`,
        custom_parameters: {
          access_method: 'qr_code',
          medical_context: source || 'general'
        },
        value: 1
      });
    }
  },

  // Evento: Calculadora usada (engajamento principal)
  trackCalculatorUsage: (indication: string, weight: number, age: number, result: any) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'calculator_used', {
        event_category: 'Tool Engagement',
        event_label: indication,
        custom_parameters: {
          patient_weight_range: getWeightRange(weight),
          patient_age_range: getAgeRange(age),
          dose_calculated: result?.doseMg || 0,
          drops_calculated: result?.drops || 0,
          had_warning: result?.isWarning || false
        },
        value: 10 // Alto valor = engajamento importante
      });
    }
  },

  // Evento: Seções visitadas (interesse em conteúdo)
  trackSectionView: (sectionName: string, timeOnSection?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'section_viewed', {
        event_category: 'Content Engagement',
        event_label: sectionName,
        custom_parameters: {
          section_name: sectionName,
          time_on_section: timeOnSection || 0
        },
        value: Math.min(timeOnSection || 1, 10) // Max 10 pontos por seção
      });
    }
  },

  // Evento: Download da bula (interesse em documentação oficial)
  trackBulaDownload: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'bula_download', {
        event_category: 'Document Engagement',
        event_label: 'Official Package Insert Downloaded',
        custom_parameters: {
          document_type: 'official_bula',
          download_method: 'direct_link'
        },
        value: 5 // Interesse moderado mas importante
      });
    }
  },

  // Evento: Contato com representante (LEAD QUALIFICADO!)
  trackRepContact: (doctorData: { 
    name?: string; 
    specialty?: string; 
    crm?: string; 
    clinic?: string;
    question?: string;
  }) => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Calcula qualidade do lead
      let leadQuality = 'basic';
      let leadScore = 15;
      
      if (doctorData.name && doctorData.specialty) {
        leadQuality = 'qualified';
        leadScore = 25;
      }
      
      if (doctorData.crm && doctorData.clinic) {
        leadQuality = 'highly_qualified';
        leadScore = 35;
      }

      window.gtag('event', 'contact_representative', {
        event_category: 'Lead Generation',
        event_label: `${leadQuality}_lead`,
        custom_parameters: {
          has_doctor_name: !!doctorData.name,
          has_specialty: !!doctorData.specialty,
          has_crm: !!doctorData.crm,
          has_clinic: !!doctorData.clinic,
          has_question: !!doctorData.question,
          lead_quality: leadQuality,
          specialty: doctorData.specialty || 'not_provided'
        },
        value: leadScore
      });
    }
  },

  // Evento: Tempo de engajamento na calculadora
  trackCalculatorEngagement: (timeSpent: number, interactionsCount: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const engagementLevel = getEngagementLevel(timeSpent, interactionsCount);
      
      window.gtag('event', 'calculator_engagement', {
        event_category: 'Tool Engagement',
        event_label: engagementLevel,
        custom_parameters: {
          time_spent_seconds: Math.round(timeSpent / 1000),
          interactions_count: interactionsCount,
          engagement_level: engagementLevel
        },
        value: Math.min(Math.round(timeSpent / 1000), 300) // Max 5 minutos
      });
    }
  },

  // Evento: Acesso ao curso médico EMS
  trackCourseAccess: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'course_access', {
        event_category: 'Education Engagement',
        event_label: 'Medico Exponencial Course Accessed',
        custom_parameters: {
          course_platform: 'medico_exponencial',
          content_type: 'continuing_education'
        },
        value: 15
      });
    }
  },

  // Evento: Erro na calculadora (importante para UX)
  trackCalculatorError: (errorType: string, inputData: any) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'calculator_error', {
        event_category: 'Tool Error',
        event_label: errorType,
        custom_parameters: {
          error_type: errorType,
          input_weight: inputData?.weight || 'not_provided',
          input_age: inputData?.age || 'not_provided',
          user_agent: navigator.userAgent.substring(0, 100)
        },
        value: -1 // Valor negativo para erros
      });
    }
  },

  // Evento: Sessão médica completa (overview da visita)
  trackSessionComplete: (sessionData: {
    timeOnSite: number;
    sectionsVisited: string[];
    calculatorUsed: boolean;
    downloadedBula: boolean;
    contactedRep: boolean;
  }) => {
    if (typeof window !== 'undefined' && window.gtag) {
      const sessionQuality = getSessionQuality(sessionData);
      
      window.gtag('event', 'session_complete', {
        event_category: 'Session Quality',
        event_label: sessionQuality,
        custom_parameters: {
          time_on_site_minutes: Math.round(sessionData.timeOnSite / 60000),
          sections_count: sessionData.sectionsVisited.length,
          used_calculator: sessionData.calculatorUsed,
          downloaded_bula: sessionData.downloadedBula,
          contacted_rep: sessionData.contactedRep,
          session_quality: sessionQuality
        },
        value: getSessionValue(sessionData)
      });
    }
  }
};

// Funções auxiliares para categorização de dados
function getWeightRange(weight: number): string {
  if (weight < 5) return 'muito_baixo_peso';
  if (weight < 10) return 'baixo_peso';
  if (weight < 15) return '10-15kg';
  if (weight < 25) return '15-25kg';
  if (weight < 40) return '25-40kg';
  return 'acima_40kg';
}

function getAgeRange(ageMonths: number): string {
  if (ageMonths < 6) return 'lactente_0-6m';
  if (ageMonths < 12) return 'lactente_6-12m';
  if (ageMonths < 24) return '1-2_anos';
  if (ageMonths < 60) return '2-5_anos';
  if (ageMonths < 120) return '5-10_anos';
  return 'acima_10_anos';
}

function getEngagementLevel(timeSpent: number, interactions: number): string {
  const timeMinutes = timeSpent / 60000;
  
  if (timeMinutes < 0.5) return 'quick_glance';
  if (timeMinutes < 2 && interactions < 3) return 'brief_interaction';
  if (timeMinutes < 5 && interactions < 8) return 'moderate_engagement';
  if (timeMinutes >= 5 || interactions >= 8) return 'deep_engagement';
  return 'standard_interaction';
}

function getSessionQuality(data: any): string {
  let score = 0;
  
  if (data.timeOnSite > 120000) score += 2; // Mais de 2 minutos
  if (data.sectionsVisited.length >= 3) score += 2;
  if (data.calculatorUsed) score += 3;
  if (data.downloadedBula) score += 1;
  if (data.contactedRep) score += 4;
  
  if (score >= 8) return 'high_quality';
  if (score >= 5) return 'medium_quality';
  if (score >= 2) return 'basic_quality';
  return 'low_quality';
}

function getSessionValue(data: any): number {
  let value = Math.min(Math.round(data.timeOnSite / 60000), 10); // Base: tempo em minutos (max 10)
  if (data.calculatorUsed) value += 10;
  if (data.downloadedBula) value += 3;
  if (data.contactedRep) value += 15;
  return value;
}

// Hook para detectar origem via QR Code
export function useQRCodeDetection() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = document.referrer;
    const qrParam = urlParams.get('qr');
    const source = urlParams.get('source') || urlParams.get('local') || 'unknown';
    
    // Detecta se veio via QR Code
    if (qrParam === '1' || (!referrer && !window.location.search)) {
      brandAnalytics.trackQRCodeAccess(source);
    }
  }, []);
}

// Hook para rastrear tempo em seções específicas
export function useSectionTracking(sectionId: string) {
  useEffect(() => {
    const startTime = Date.now();
    let hasTracked = false;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked) {
            const timeSpent = Date.now() - startTime;
            if (timeSpent > 3000) { // Pelo menos 3 segundos
              brandAnalytics.trackSectionView(sectionId, timeSpent);
              hasTracked = true;
            }
          }
        });
      },
      { threshold: 0.5 } // 50% da seção visível
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sectionId]);
}

// Hook para rastrear engajamento geral da sessão
export function useSessionTracking() {
  useEffect(() => {
    const sessionStart = Date.now();
    const sectionsVisited: string[] = [];
    let calculatorUsed = false;
    let downloadedBula = false;
    let contactedRep = false;
    
    // Escuta eventos customizados da aplicação
    const handleCalculatorUse = () => { calculatorUsed = true; };
    const handleBulaDownload = () => { downloadedBula = true; };
    const handleRepContact = () => { contactedRep = true; };
    const handleSectionVisit = (e: CustomEvent) => {
      if (!sectionsVisited.includes(e.detail.sectionId)) {
        sectionsVisited.push(e.detail.sectionId);
      }
    };

    window.addEventListener('calculator-used', handleCalculatorUse);
    window.addEventListener('bula-downloaded', handleBulaDownload);
    window.addEventListener('rep-contacted', handleRepContact);
    window.addEventListener('section-visited', handleSectionVisit as EventListener);

    // Rastreia fim da sessão
    const trackSessionEnd = () => {
      const sessionData = {
        timeOnSite: Date.now() - sessionStart,
        sectionsVisited,
        calculatorUsed,
        downloadedBula,
        contactedRep
      };
      
      brandAnalytics.trackSessionComplete(sessionData);
    };

    window.addEventListener('beforeunload', trackSessionEnd);
    
    return () => {
      window.removeEventListener('calculator-used', handleCalculatorUse);
      window.removeEventListener('bula-downloaded', handleBulaDownload);
      window.removeEventListener('rep-contacted', handleRepContact);
      window.removeEventListener('section-visited', handleSectionVisit as EventListener);
      window.removeEventListener('beforeunload', trackSessionEnd);
    };
  }, []);
}

// Declaração de tipos para TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}
