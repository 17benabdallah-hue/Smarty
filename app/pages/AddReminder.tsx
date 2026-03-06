'use client';

import { useState } from "react";
import { ReminderStorage } from "./ReminderStorage"; // استدعاء وحدة التخزين

export default function AddReminder() {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;

    // إنشاء كائن تذكير جديد
    const newReminder = {
      id: Date.now().toString(), // معرف فريد
      title: text,
      date: new Date().toISOString(),
      priority: "low", // يمكن تغييره لاحقاً حسب اختيار المستخدم
    };

    // حفظ التذكير في localStorage
    ReminderStorage.save(newReminder);

    alert("✅ تم إضافة التذكير: " + text);

    setText("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        إضافة تذكير
      </h2>

      <input
        type="text"
        placeholder="اكتب تذكيرك هنا..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-3 rounded-lg mb-4"
      />

      <button
        onClick={handleAdd}
        className="w-full bg-green-600 text-white py-3 rounded-lg"
      >
        حفظ التذكير
      </button>
    </div>
  );
}
