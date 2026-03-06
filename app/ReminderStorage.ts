// app/ReminderStorage.ts
import { Reminder } from '@/lib/reminder-utils';

export class ReminderStorage {
  private static KEY = 'reminders';

  static getAll(): Reminder[] {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(this.KEY);
    return data ? JSON.parse(data) : [];
  }

  static save(reminders: Reminder[]) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.KEY, JSON.stringify(reminders));
    }
  }

  static clear() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.KEY);
    }
  }
}
