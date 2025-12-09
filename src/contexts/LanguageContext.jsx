import React, { createContext, useContext, useState, useMemo } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    headerTitle: 'GIA ĐÌNH PHẬT TỬ TỪ ĐÀM',
    subtitle: 'BI - TRÍ - DŨNG',
    nav: {
      apply: 'Apply to Join',
      events: 'Upcoming Events',
      about: 'About Us',
      volunteer: 'Volunteer',
      activities: 'Activities',
      photos: 'Photo Gallery',
    },
    events: {
      title: 'Upcoming Events',
      schedule: 'Current Schedule',
      addEvent: 'Add Event (Admin)',
      editDelete: 'Edit/Delete Events',
    },
    footer: {
      copyright: '©2024 Chanh Phap Buddhist Youth Association. All Rights Reserved.',
      address: 'PO BOX 2963, Garden Grove, CA 92842-2963',
      contactPrefix: 'Contact',
      contactName: 'Thao Nguyen',
      contactEmail: 'Thao.gdpt@gmail.com',
    },
  },
  vi: {
    headerTitle: "GIA ĐÌNH PHẬT TỬ TỪ ĐÀM",
    subtitle: 'BI - TRÍ - DŨNG',
    nav: {
      apply: 'Đơn xin gia nhập',
      events: 'Sự kiện sắp tới',
      about: 'Về chúng tôi',
      volunteer: 'Tình nguyện',
      activities: 'Hoạt động',
      photos: 'Thư viện ảnh',
    },
    events: {
      title: 'Sự kiện sắp tới',
      schedule: 'Lịch hiện tại',
      addEvent: 'Thêm sự kiện (Quản trị)',
      editDelete: 'Chỉnh sửa/Xóa',
    },
    footer: {
      copyright: '©2024 Chanh Phap Buddhist Youth Association. Bảo lưu mọi quyền.',
      address: 'HỘP THƯ 2963, Garden Grove, CA 92842-2963',
      contactPrefix: 'Liên hệ',
      contactName: 'Thao Nguyen',
      contactEmail: 'Thao.gdpt@gmail.com',
    },
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const value = useMemo(() => ({
    lang,
    setLang,
    t: (path) => {
      if (!path) return '';
      const parts = path.split('.');
      let node = translations[lang] || translations.en;
      for (const p of parts) {
        node = node?.[p];
        if (node === undefined) return '';
      }
      return node;
    },
  }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export default LanguageContext;
