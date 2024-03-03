/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NfYCpfdqLnA
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import api from "./api";
export function Component() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = React.useState(
    Array(api.length).fill(null)
  );

  const handleNextQuestion = () => {
    if (currentQuestionIndex < api.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const [lightmode, setLightMode] = React.useState(false);

  const toggleDarkMode = () => {
    setLightMode(!lightmode);
  };

  const handleOptionSelect = (optionIndex: any) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestionIndex] =
      api[currentQuestionIndex].Options[optionIndex];
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleSubmit = () => {
    console.log(selectedOptions);
  };

  const currentQuestion = api[currentQuestionIndex];

  return (
    <div className="flex flex-col min-h-screen w-full h-full dark:bg-gray-800">
      <header className={`p-4 ${lightmode ? "bg-gray-900" : "bg-white"}`}>
        <div className="container flex items-start justify-end gap-4 text-white">
          <div className="flex items-start gap-4">
            <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {lightmode ? (
                <>
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                  Light Mode
                </>
              ) : (
                <>
                  <MoonIcon className="h-5 w-5 text-gray-300" />
                  Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container flex flex-col gap-4">
          <div className="p-4 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-800">
            <h1 className="text-3xl font-bold dark:text-white">
              {currentQuestion.Question}
            </h1>
            <p className="text-lg dark:text-gray-300">
              Choose the correct option from the options below.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {api[currentQuestionIndex].Options.map((option, index) => (
                  <li
                    key={index}
                    className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                  >
                    <div className="flex items-center ps-3">
                      <input
                        id={`react-checkbox-list-${currentQuestionIndex}-${index}`}
                        type="checkbox"
                        value={option}
                        onChange={() => handleOptionSelect(index)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor={`react-checkbox-list-${currentQuestionIndex}-${index}`}
                        className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {option}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="container flex items-start justify-end gap-4 text-white mt-8">
                <div className="flex items-start gap-4">
                  {currentQuestionIndex > 0 && (
                    <button
                      onClick={handlePreviousQuestion}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Previous
                    </button>
                  )}
                  {currentQuestionIndex < api.length - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-4 border-t"></footer>
    </div>
  );
}
function FlagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function SunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}