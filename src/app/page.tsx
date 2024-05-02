"use client";

import Question from "@/components/language";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GridLoader } from "react-spinners";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Language from "@/components/language";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("");

  async function pauseForTwoSeconds(): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000); // 2000 milliseconds = 2 seconds
    });
  }

  async function handlePress() {
    setLoading(true);
    // send request to get question
    const language = "VBA";

    await pauseForTwoSeconds(); // pause for dramatic effect
    // update states
    setLanguage(language);
    setLoading(false);
  }

  return (
    <main className='flex h-screen flex-col items-center justify-between md:p-24 py-16 md:py-24 px-8 bg-amber-500'>
      <div className='md:container content-center text-center drop-shadow-md hover:drop-shadow-xl bg-white rounded-md p-5'>
        <h1 className='font-bold text-4xl py-5'>
          Ever wondered what the best programming language is of all time?
        </h1>
        <p className='py-5'>
          Maybe you feel stuck, or want a new challenge in your life. Wondering
          which language will give you the best things life has to offer?
        </p>
        <p className='py-5'>
          Well look no further! Using our advanced algorithms and search
          functionality, we have combed through the web to figure out the answer
          to this exact question!
        </p>
        <p className='py-5'>
          And the great news, is the answer is just a single button click
          away...
        </p>

        <div className='pb-5'>
          <Button
            className='bg-blue-500 hover:bg-blue-700'
            onClick={handlePress}
            disabled={loading}
          >
            Generate
          </Button>
          <div className='justify-center p-5'>
            {loading ? (
              <>
                <p className='py-5'>
                  Utilizing our advanced searching algoritms...
                </p>
                <GridLoader /> <br />
              </>
            ) : (
              <Language language={language} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
