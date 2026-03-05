'use client';

import { useState } from "react";
import AddReminder from "./pages/AddReminder";

export default function Home() {

  const [showAdd, setShowAdd] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-6">

      {/* عنوان التطبيق */}
      <h1 className="text-3xl font-bold mb-6">
        Smarty
      </h1>

      <p className="mb-8 text-center text-gray-500">
        السكرتير الذكي الذي لا ينسى
      </p>

      {/* زر إضافة تذكير */}
      <button
        onClick={() => setShowAdd(true)}
        className="bg-purple-600 text-white px-6 py-3 rounded-xl"
      >
        إضافة تذكير
      </button>

      {/* نافذة إضافة التذكير */}
      {showAdd && (
        <div className="mt-8 w-full max-w-md">
          <AddReminder />
        </div>
      )}

    </main>
  );
}
