export type LanguageCode = 'ar' | 'en' | 'fr' | 'zh';

interface Translation {
  // أزرار عامة
  btn_done: string;
  btn_delete: string;
  btn_snooze: string;
  btn_save: string;
  btn_cancel: string;

  // الأولويات
  priority_low: string;
  priority_medium: string;
  priority_high: string;
  priority_critical: string;

  // أنواع الأحداث
  event_food: string;
  event_medicine: string;
  event_travel: string;
  event_meeting: string;
  event_school: string;
  event_other: string;

  // الرسائل الذكية
  msg_food_ready: string;
  msg_medicine_time: string;
  msg_travel_warning: string;
  msg_meeting_reminder: string;
  msg_school_return: string;

  // نصوص أخرى
  lbl_language: string;
  lbl_dark_mode: string;
  lbl_notifications: string;
  lbl_privacy: string;
  lbl_about: string;
}

export const translations: Record<LanguageCode, Translation> = {
  ar: {
    btn_done: 'تم',
    btn_delete: 'حذف',
    btn_snooze: 'غفوة 5 دقائق',
    btn_save: 'حفظ',
    btn_cancel: 'إلغاء',

    priority_low: 'منخفضة',
    priority_medium: 'متوسطة',
    priority_high: 'عالية',
    priority_critical: 'حرجة',

    event_food: 'طعام',
    event_medicine: 'دواء',
    event_travel: 'رحلة',
    event_meeting: 'اجتماع',
    event_school: 'مدرسة',
    event_other: 'موعد عام',

    msg_food_ready: '🍲 الطعام جاهز تقريباً! تفقده الآن.',
    msg_medicine_time: '💊 حان وقت تناول الدواء. لا تنسى!',
    msg_travel_warning: '✈️ اقترب موعد رحلتك. تأكد من وثائقك!',
    msg_meeting_reminder: '💼 تذكير باجتماعك. استعد للموعد!',
    msg_school_return: '🏫 اقترب موعد عودة الأبناء من المدرسة.',

    lbl_language: 'اللغة',
    lbl_dark_mode: 'الوضع الليلي',
    lbl_notifications: 'الإشعارات',
    lbl_privacy: 'الخصوصية والأمان',
    lbl_about: 'عن التطبيق',
  },
  en: {
    btn_done: 'Done',
    btn_delete: 'Delete',
    btn_snooze: 'Snooze 5 min',
    btn_save: 'Save',
    btn_cancel: 'Cancel',

    priority_low: 'Low',
    priority_medium: 'Medium',
    priority_high: 'High',
    priority_critical: 'Critical',

    event_food: 'Food',
    event_medicine: 'Medicine',
    event_travel: 'Travel',
    event_meeting: 'Meeting',
    event_school: 'School',
    event_other: 'General',

    msg_food_ready: '🍲 Food is almost ready! Check it now.',
    msg_medicine_time: '💊 Time to take your medicine. Don’t forget!',
    msg_travel_warning: '✈️ Your flight is approaching. Check your documents!',
    msg_meeting_reminder: '💼 Meeting reminder. Get ready!',
    msg_school_return: '🏫 Time for kids to return from school.',

    lbl_language: 'Language',
    lbl_dark_mode: 'Dark Mode',
    lbl_notifications: 'Notifications',
    lbl_privacy: 'Privacy & Security',
    lbl_about: 'About',
  },
  fr: {
    btn_done: 'Terminé',
    btn_delete: 'Supprimer',
    btn_snooze: 'Snooze 5 min',
    btn_save: 'Enregistrer',
    btn_cancel: 'Annuler',

    priority_low: 'Faible',
    priority_medium: 'Moyenne',
    priority_high: 'Haute',
    priority_critical: 'Critique',

    event_food: 'Nourriture',
    event_medicine: 'Médicament',
    event_travel: 'Voyage',
    event_meeting: 'Réunion',
    event_school: 'École',
    event_other: 'Général',

    msg_food_ready: '🍲 La nourriture est presque prête ! Vérifiez-la maintenant.',
    msg_medicine_time: '💊 Il est temps de prendre votre médicament. N’oubliez pas !',
    msg_travel_warning: '✈️ Votre vol approche. Vérifiez vos documents !',
    msg_meeting_reminder: '💼 Rappel de réunion. Préparez-vous !',
    msg_school_return: '🏫 Les enfants vont bientôt revenir de l’école.',

    lbl_language: 'Langue',
    lbl_dark_mode: 'Mode sombre',
    lbl_notifications: 'Notifications',
    lbl_privacy: 'Confidentialité & Sécurité',
    lbl_about: 'À propos',
  },
  zh: {
    btn_done: '完成',
    btn_delete: '删除',
    btn_snooze: '延迟 5 分钟',
    btn_save: '保存',
    btn_cancel: '取消',

    priority_low: '低',
    priority_medium: '中',
    priority_high: '高',
    priority_critical: '紧急',

    event_food: '食物',
    event_medicine: '药物',
    event_travel: '旅行',
    event_meeting: '会议',
    event_school: '学校',
    event_other: '一般',

    msg_food_ready: '🍲 食物快好了！请查看。',
    msg_medicine_time: '💊 该吃药了，别忘记！',
    msg_travel_warning: '✈️ 你的航班即将起飞，请检查文件！',
    msg_meeting_reminder: '💼 会议提醒，请准备！',
    msg_school_return: '🏫 孩子们即将放学回家。',

    lbl_language: '语言',
    lbl_dark_mode: '深色模式',
    lbl_notifications: '通知',
    lbl_privacy: '隐私与安全',
    lbl_about: '关于',
  },
};
