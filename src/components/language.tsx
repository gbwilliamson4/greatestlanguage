"use client";

import React from "react";

interface LanguageProps {
  language: string;
}

const Language = ({ language }: LanguageProps) => {
  return (
    <>
      <div className='text-3xl mt-7 hover:cursor-pointer'>{language}</div>
    </>
  );
};

export default Language;
