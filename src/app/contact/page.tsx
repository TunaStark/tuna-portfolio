"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xojevwwb");

  // --- BAŞARILI GÖNDERİM EKRANI ---
  if (state.succeeded) {
    return (
      <section className="min-h-screen pt-24 px-4 flex items-center justify-center text-center">
        <div className="bg-green-900/20 p-8 rounded-2xl border border-green-800 shadow-sm animate-fade-in">
            <div className="w-16 h-16 bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-800">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-3xl font-bold text-green-400 mb-2">Mesajın Alındı!</h2>
            <p className="text-gray-300 mb-6">En kısa sürede sana geri dönüş yapacağım.</p>
            <button 
                onClick={() => window.location.reload()} 
                className="text-sm font-medium text-green-400 hover:text-green-300 underline transition-colors"
            >
                Yeni bir mesaj gönder
            </button>
        </div>
      </section>
    );
  }

  // --- FORM EKRANI ---
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          İletişime Geçin
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
           Bir proje fikriniz mi var veya sadece tanışmak mı istiyorsunuz? 
           Aşağıdaki formu doldurarak bana doğrudan e-posta gönderebilirsiniz.
        </p>
      </div>

      {/* FORM KUTUSU */}
      <div className="bg-gray-900/50 p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-lg backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* İsim Alanı */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Adınız Soyadınız
            </label>
            <input
              id="name"
              type="text" 
              name="name"
              placeholder="Örn: Ahmet Yılmaz"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Email Alanı */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              E-posta Adresiniz
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              placeholder="ornek@email.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Mesaj Alanı */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Mesajınız
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Size nasıl yardımcı olabilirim?"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
          </div>

          {/* Gönder Butonu */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-4 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30"
          >
            {state.submitting ? "Gönderiliyor..." : "Gönder"}
          </button>
        </form>
      </div>
    </section>
  );
}