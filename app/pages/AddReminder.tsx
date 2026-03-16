'use client';

import React, { useState } from 'react';
import { Reminder } from '@/lib/reminder-utils';
import { ReminderStorage } from '../ReminderStorage'; // ✅ المسار الصحيح

export default function AddReminder() {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (!text.trim()) return;

    const newReminder: Reminder = {
      id: Date.now().toString(),
      text,
      completed: false,
      reminderTime: [],
    };

    ReminderStorage.add(newReminder);
    setText('');
    alert('تمت إضافة التذكير بنجاح ✅');
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">إضافة تذكير جديد</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="اكتب التذكير هنا..."
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleAdd}
        className="bg-orange-600 text-white px-4 py-2 rounded"
      >
        إضافة
      </button>
    </div>
  );
}
