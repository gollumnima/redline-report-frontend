"use client"
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const getCurrentPage = (): 'input' | 'about' | 'result' => {
    if (pathname === '/about') return 'about';
    if (pathname.startsWith('/result')) return 'result';
    return 'input';
  };

  const handleNavigation = (page: 'input' | 'about' | 'result') => {
    let path = '/';
    if (page === 'about') path = '/about';
    if (page === 'result') path = '/result';
    
    router.push(path);
    setIsMenuOpen(false);
  };

  const currentPage = getCurrentPage();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleNavigation('input')}
                className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer"
              >
                Red Line Report
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl transition-colors duration-200 text-gray-600 hover:bg-gray-100 focus:outline-none relative z-60"
              aria-label="메뉴 열기/닫기"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl border-l border-gray-200 z-50 transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">메뉴</h3>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="메뉴 닫기"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-4">
          <button
            onClick={() => handleNavigation('input')}
            className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center space-x-3 ${
              currentPage === 'input'
                ? 'bg-blue-50 text-blue-600 border border-blue-200'
                : 'text-gray-700 hover:bg-gray-50 border border-transparent'
            }`}
          >
            <span className="text-xl">🏠</span>
            <div>
              <div className="font-medium">홈</div>
              <div className="text-xs text-gray-500">젠더감수성 분석하기</div>
            </div>
          </button>
          
          <button
            onClick={() => handleNavigation('about')}
            className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center space-x-3 ${
              currentPage === 'about'
                ? 'bg-blue-50 text-blue-600 border border-blue-200'
                : 'text-gray-700 hover:bg-gray-50 border border-transparent'
            }`}
          >
            <span className="text-xl">ℹ️</span>
            <div>
              <div className="font-medium">프로젝트 소개</div>
              <div className="text-xs text-gray-500">Red Line Report에 대해</div>
            </div>
          </button>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-sm text-gray-600 text-center">
              <div className="font-medium text-gray-900 mb-1">Red Line Report</div>
              <div>더 나은 미디어 환경을 위한</div>
              <div>작은 발걸음</div>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-10 z-40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;