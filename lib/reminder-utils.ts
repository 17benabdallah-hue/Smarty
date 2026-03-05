// lib/reminder-utils.ts
import { format } from 'date-fns';
import { parseReminderText, ReminderData, EventType } from './smartParser';
import { LanguageCode, translations } from './translations';

export type Priority = 1 | 2 | 3 | 4;

export enum ReminderStage {
  WARNING = 'WARNING',
  FINAL = 'FINAL'
}

export interface Reminder {
  id: string;
  text: string;
  reminderTime: string; // ISO string للموعد التالي للإشعار
  reminderTimes: string[]; // كل مواعيد الإشعار
  eventTime: string;
  createdAt: string;
  isCompleted: boolean;
  recurring: 'none' | 'hourly' | 'daily' | 'weekly';
  priority: Priority;
  eventType: EventType;
  location?: string;
  confidence: number;
  suggestedMessage: string;
  snoozeCount: number;
  maxSnooze: number;
  parentId?: string;
  stage: ReminderStage;
  totalDurationMinutes?: number;
}

// ---------------------------
// حساب الأولوية بناءً على النص
// ---------------------------
export function analyzePriority(text: string): Priority {
  const t = text.toLowerCase();
  const urgent = ['عاجل','ضروري','مهم جدا','فورا','urgent','important'];
  const normal = ['عادي','تذكير','موعد','normal','reminder'];
  const low = ['يمكن','لاحقا','بعدين','maybe','later'];

  if (urgent.some(k => t.includes(k))) return 4;
  if (normal.some(k => t.includes(k))) return 2;
  if (low.some(k => t.includes(k))) return 1;
  return 3;
}

// ---------------------------
// تحويل نص المستخدم لتذكير كامل
// ---------------------------
export function createReminderFromText(text: string, lang: LanguageCode = 'ar'): Reminder {
  const parsed: ReminderData = parseReminderText(text);
  const now = new Date();

  const reminderTimesISO = parsed.reminderTimes.map(d => d.toISOString());

  return {
    id: crypto.randomUUID(),
    text,
    reminderTime: parsed.reminderTimes[0].toISOString(),
    reminderTimes: reminderTimesISO,
    eventTime: parsed.eventTime.toISOString(),
    createdAt: now.toISOString(),
    isCompleted: false,
    recurring: 'none',
    priority: analyzePriority(text),
    eventType: parsed.eventType,
    location: undefined,
    confidence: parsed.confidence,
    suggestedMessage: parsed.suggestedMessage,
    snoozeCount: 0,
    maxSnooze: 3,
    stage: ReminderStage.WARNING,
    totalDurationMinutes: Math.round((parsed.reminderTimes[1].getTime() - now.getTime()) / (60*1000))
  };
}

// ---------------------------
// توليد الرسالة الذكية النهائية للتحذير أو النهائي
// ---------------------------
export function generateCustomMessage(eventType: EventType, lang: LanguageCode = 'ar'): string {
  const t = translations[lang];
  switch (eventType) {
    case 'food': return lang === 'ar' ? '🍲 الطعام جاهز تقريباً! تفقده الآن.' : '🍲 Food is almost ready! Check it now.';
    case 'medicine': return lang === 'ar' ? '💊 حان وقت تناول الدواء. لا تنسى!' : '💊 Time to take your medicine. Don’t forget!';
    case 'travel': return lang === 'ar' ? '✈️ اقترب موعد رحلتك. تأكد من وثائقك!' : '✈️ Your flight is approaching. Check your documents!';
    case 'meeting': return lang === 'ar' ? '💼 تذكير باجتماعك. استعد للموعد!' : '💼 Meeting reminder. Get ready!';
    case 'school': return lang === 'ar' ? '🏫 اقترب موعد عودة الأبناء من المدرسة.' : '🏫 Time for kids to return from school.';
    default: return lang === 'ar' ? '🔔 تذكير: تحقق من جدولك.' : '🔔 Reminder: Check your schedule.';
  }
}

// ---------------------------
// تسميات وألوان الأولوية
// ---------------------------
export function getPriorityLabel(priority: Priority, lang: LanguageCode = 'ar'): string {
  const t = translations[lang];
  switch(priority) {
    case 1: return t.priority_low;
    case 2: return t.priority_medium;
    case 3: return t.priority_high;
    case 4: return t.priority_critical;
    default: return t.priority_medium;
  }
}

export function getPriorityColor(priority: Priority): string {
  switch(priority) {
    case 1: return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500';
    case 2: return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
    case 3: return 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400';
    case 4: return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400';
    default: return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500';
  }
}
