import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina classes do Tailwind CSS evitando conflitos
 * Usa clsx para lógica condicional e twMerge para resolver conflitos
 * 
 * Exemplo de uso:
 * cn('px-4 py-2', isActive && 'bg-blue-500', className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formata números para o padrão brasileiro
 * Exemplo: 1234.56 → "1.234,56"
 */
export function formatNumber(num: number, decimals: number = 2): string {
  return num.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Formata peso para exibição
 * Exemplo: 12.5 → "12,5 kg"
 */
export function formatWeight(weight: number): string {
  return `${formatNumber(weight, 1)} kg`;
}

/**
 * Formata idade em meses para texto legível
 * Exemplo: 18 → "1 ano e 6 meses"
 */
export function formatAge(months: number): string {
  if (months < 12) {
    return `${months} ${months === 1 ? 'mês' : 'meses'}`;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) {
    return `${years} ${years === 1 ? 'ano' : 'anos'}`;
  }

  return `${years} ${years === 1 ? 'ano' : 'anos'} e ${remainingMonths} ${
    remainingMonths === 1 ? 'mês' : 'meses'
  }`;
}

/**
 * Formata dose de medicamento
 * Exemplo: 2 → "2mg"
 */
export function formatDose(doseMg: number): string {
  return `${formatNumber(doseMg, 1)}mg`;
}

/**
 * Formata número de gotas
 * Exemplo: 5 → "5 gotas"
 */
export function formatDrops(drops: number): string {
  const rounded = Math.round(drops);
  return `${rounded} ${rounded === 1 ? 'gota' : 'gotas'}`;
}

/**
 * Valida se um número está dentro de um range
 */
export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

/**
 * Valida peso pediátrico (2kg a 100kg)
 */
export function isValidWeight(weight: number): boolean {
  return isInRange(weight, 2, 100) && !isNaN(weight) && weight > 0;
}

/**
 * Valida idade pediátrica (0 a 216 meses = 18 anos)
 */
export function isValidAge(ageMonths: number): boolean {
  return isInRange(ageMonths, 0, 216) && !isNaN(ageMonths) && ageMonths >= 0;
}

/**
 * Calcula IMC pediátrico (necessita peso e altura)
 * Não usado atualmente, mas útil para futuras funcionalidades
 */
export function calculateBMI(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

/**
 * Debounce function - previne execuções excessivas
 * Útil para inputs com cálculos pesados
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function - limita frequência de execução
 * Útil para scroll events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Gera um ID único para elementos
 * Útil para acessibilidade (aria-labelledby, etc)
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Copia texto para clipboard
 * Usado no botão de compartilhar
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback para navegadores antigos
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        textArea.remove();
        return true;
      } catch (error) {
        console.error('Fallback: Erro ao copiar', error);
        textArea.remove();
        return false;
      }
    }
  } catch (error) {
    console.error('Erro ao copiar para clipboard:', error);
    return false;
  }
}

/**
 * Detecta se é dispositivo móvel
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * Detecta se é iOS
 */
export function isIOS(): boolean {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
}

/**
 * Detecta se suporta touch
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Scroll suave para elemento
 * Considera header fixo
 */
export function scrollToElement(
  elementId: string,
  offset: number = 80
): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Formata URL para WhatsApp
 */
export function formatWhatsAppUrl(
  phone: string,
  message: string
): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Valida CRM (formato básico)
 * Exemplo: CRM/SP 123456
 */
export function isValidCRM(crm: string): boolean {
  const crmPattern = /^CRM\/(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)\s?\d{4,6}$/i;
  return crmPattern.test(crm.trim());
}

/**
 * Sanitiza input do usuário (previne XSS)
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < e >
    .trim()
    .slice(0, 500); // Limita tamanho
}

/**
 * Formata data para padrão brasileiro
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/**
 * Formata horário para padrão brasileiro
 */
export function formatTime(date: Date): string {
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Calcula diferença de tempo em segundos
 */
export function getTimeDifference(startTime: number, endTime: number): number {
  return Math.round((endTime - startTime) / 1000);
}

/**
 * Verifica se é ambiente de produção
 */
export function isProduction(): boolean {
  return import.meta.env.PROD;
}

/**
 * Verifica se é ambiente de desenvolvimento
 */
export function isDevelopment(): boolean {
  return import.meta.env.DEV;
}

/**
 * Logger condicional (só loga em dev)
 */
export const logger = {
  log: (...args: any[]) => {
    if (isDevelopment()) {
      console.log(...args);
    }
  },
  error: (...args: any[]) => {
    if (isDevelopment()) {
      console.error(...args);
    }
  },
  warn: (...args: any[]) => {
    if (isDevelopment()) {
      console.warn(...args);
    }
  },
  info: (...args: any[]) => {
    if (isDevelopment()) {
      console.info(...args);
    }
  },
};

/**
 * Arredonda número para múltiplo mais próximo
 * Útil para arredondar gotas
 */
export function roundToNearest(value: number, nearest: number = 1): number {
  return Math.round(value / nearest) * nearest;
}

/**
 * Converte idade em anos para meses
 */
export function yearsToMonths(years: number): number {
  return Math.round(years * 12);
}

/**
 * Converte meses para anos (com decimais)
 */
export function monthsToYears(months: number): number {
  return months / 12;
}

/**
 * Trunca texto com ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

/**
 * Capitaliza primeira letra
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Formata telefone brasileiro
 * Exemplo: 11991234567 → (11) 99123-4567
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  }
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  
  return phone;
}

/**
 * Remove acentos de string
 */
export function removeAccents(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Cria slug a partir de texto
 * Exemplo: "Enavo Gotas 2024" → "enavo-gotas-2024"
 */
export function slugify(text: string): string {
  return removeAccents(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Valida email (regex básico)
 */
export function isValidEmail(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

/**
 * Gera mensagem de WhatsApp formatada
 */
export function generateWhatsAppMessage(data: {
  doctorName?: string;
  specialty?: string;
  crm?: string;
  clinic?: string;
  question: string;
}): string {
  let message = 'Nova pergunta sobre Enavo Gotas (via plataforma digital):\n';
  
  if (data.doctorName) {
    message += `\n- Nome: Dr(a). ${data.doctorName}`;
  }
  
  if (data.specialty) {
    message += `\n- Especialidade: ${data.specialty}`;
  }
  
  if (data.crm) {
    message += `\n- CRM: ${data.crm}`;
  }
  
  if (data.clinic) {
    message += `\n- Clínica/Hospital: ${data.clinic}`;
  }
  
  message += `\n\n- Pergunta: ${data.question}`;
  
  return message;
}

/**
 * Obtém parâmetros da URL
 */
export function getQueryParams(): URLSearchParams {
  if (typeof window === 'undefined') return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}

/**
 * Detecta se acessou via QR code
 */
export function isQRAccess(): boolean {
  const params = getQueryParams();
  return params.get('qr') === '1' || !document.referrer;
}

/**
 * Salva dados no sessionStorage com segurança
 */
export function saveToSession(key: string, value: any): boolean {
  try {
    if (typeof window === 'undefined') return false;
    sessionStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    logger.error('Erro ao salvar em sessionStorage:', error);
    return false;
  }
}

/**
 * Recupera dados do sessionStorage
 */
export function getFromSession<T>(key: string): T | null {
  try {
    if (typeof window === 'undefined') return null;
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    logger.error('Erro ao recuperar de sessionStorage:', error);
    return null;
  }
}

/**
 * Remove dados do sessionStorage
 */
export function removeFromSession(key: string): void {
  try {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem(key);
  } catch (error) {
    logger.error('Erro ao remover de sessionStorage:', error);
  }
}

/**
 * Limpa todo sessionStorage
 */
export function clearSession(): void {
  try {
    if (typeof window === 'undefined') return;
    sessionStorage.clear();
  } catch (error) {
    logger.error('Erro ao limpar sessionStorage:', error);
  }
}

/**
 * Exporta objeto com todas as utilities
 */
export default {
  cn,
  formatNumber,
  formatWeight,
  formatAge,
  formatDose,
  formatDrops,
  isInRange,
  isValidWeight,
  isValidAge,
  calculateBMI,
  debounce,
  throttle,
  generateId,
  copyToClipboard,
  isMobile,
  isIOS,
  isTouchDevice,
  scrollToElement,
  formatWhatsAppUrl,
  isValidCRM,
  sanitizeInput,
  formatDate,
  formatTime,
  getTimeDifference,
  isProduction,
  isDevelopment,
  logger,
  roundToNearest,
  yearsToMonths,
  monthsToYears,
  truncate,
  capitalize,
  formatPhone,
  removeAccents,
  slugify,
  isValidEmail,
  generateWhatsAppMessage,
  getQueryParams,
  isQRAccess,
  saveToSession,
  getFromSession,
  removeFromSession,
  clearSession,
};
