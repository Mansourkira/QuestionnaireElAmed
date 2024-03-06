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
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { FR, SA, USA } from "@sikka/alam";
import * as Realm from "realm-web";

export function Component() {
  const REALM_APP_ID = "your-realm-app-id"; // e.g. myapp-abcde
  const app = new Realm.App({ id: REALM_APP_ID });

  const [currentSectionIndex, setCurrentSectionIndex] = React.useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedOptions, setSelectedOptions] = React.useState(
    api.map((section) =>
      section.questions.map((question) =>
        new Array(question?.Options?.length).fill(false)
      )
    )
  );
  const handleNextQuestion = () => {
    const currentSection = api[currentSectionIndex];
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSectionIndex < api.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setCurrentQuestionIndex(
        api[currentSectionIndex - 1].questions.length - 1
      );
    }
  };

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    setSelectedOptions((prevSelectedOptions) => {
      // Copy the previous state
      const newSelectedOptions = JSON.parse(
        JSON.stringify(prevSelectedOptions)
      );

      // Update the selected option
      newSelectedOptions[currentSectionIndex][questionIndex][optionIndex] =
        !newSelectedOptions[currentSectionIndex][questionIndex][optionIndex];

      // Return the new state
      return newSelectedOptions;
    });
  };
  const [lightmode, setLightMode] = React.useState(false);

  const toggleDarkMode = () => {
    setLightMode(!lightmode);
  };
  /* const handleSubmit = () => {
    const doc = new jsPDF();
    console.log("selected options : ", selectedOptions);
      const tableData = api
      .map((section: any, sectionIndex: any) => {
        return section.questions.map((question: any, questionIndex: any) => {
          if (
            question.Options === undefined ||
            selectedOptions[sectionIndex][questionIndex] === undefined
          )
            return null;
          const answerIndex =
            selectedOptions[sectionIndex][questionIndex].indexOf(true);
          const answer =
            answerIndex !== -1 ? question.Options[answerIndex] : "No answer";
          return {
            section: section.title,
            question: question.title,
            answer: answer,
          };
        });
      })
      .flat()
      .filter((data) => data !== null);

    autoTable(doc, {
      head: [["Section", "Question", "Answer"]],
      body: tableData,
    });

    doc.save("Survey-Answers.pdf");  
  }; */
  const handleSubmit = async () => {
    console.log("selected options : ", selectedOptions);

    // Log in to your Realm app
    const credentials = Realm.Credentials.anonymous();
    const user = await app.logIn(credentials);

    // Get a MongoDB service client
    const mongodb = app.services.mongodb("mongodb-atlas");

    // Get a reference to the survey collection
    const surveyCollection = mongodb
      .db("your-database-name")
      .collection("your-collection-name");

    // Create a new document with the selected options
    const doc = { selectedOptions };

    // Insert the document into the collection
    const result = await surveyCollection.insertOne(doc);

    console.log(
      `Successfully inserted document with _id: ${result.insertedId}`
    );
  };
  const currentSection = api[currentSectionIndex];
  const currentQuestion = currentSection.questions[currentQuestionIndex];
  const handleLanguageChange = (language: any) => {
    switch (language) {
      case "SA":
        break;
      case "USA":
        console.log("USA");
        break;
      case "FR":
        console.log("FR");
        break;
      default:
        // Default language
        break;
    }
  };
  return (
    <div
      className={`flex flex-col min-h-screen w-full h-full ${
        lightmode ? "bg-white" : "dark:bg-gray-800"
      }`}
    >
      {" "}
      <header className={`p-4 ${lightmode ? "bg-white" : "bg-gray-900"}`}>
        <div className="container flex items-start justify-between gap-4 text-white">
          <img
            src={lightmode ? "/images/elamed.jpg" : "/images/elameddark.jpg"}
            alt="Logo"
            className="h-10 w-auto"
          />{" "}
          <div className="flex items-start gap-4">
            <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {lightmode ? (
                <>
                  <MoonIcon className="h-5 w-5 text-gray-300" />
                </>
              ) : (
                <>
                  <SunIcon className="h-5 w-5 text-yellow-400" />
                </>
              )}
            </button>

            <div onClick={() => handleLanguageChange("USA")}>
              <USA />
            </div>
            <div onClick={() => handleLanguageChange("FR")}>
              <FR />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container flex flex-col gap-4">
          <div
            className={`p-4 border rounded-lg ${
              lightmode
                ? "border-gray-200 bg-white text-black"
                : "dark:bg-gray-700 dark:border-gray-800 dark:text-gray-300"
            }`}
          >
            <h1
              className={`text-3xl font-bold ${
                lightmode ? "text-black" : "dark:text-white"
              }`}
            >
              {currentSection.section}
            </h1>
            <h2
              className={`text-xl font-medium ${
                lightmode ? "text-black" : "dark:text-gray-300"
              }`}
            >
              {currentSectionIndex + 1} sur {api.length} sections{" "}
            </h2>
            <p
              className={`text-lg ${
                lightmode ? "text-black" : "dark:text-gray-300"
              }`}
            >
              {currentQuestion.Question}
            </p>
            <p
              className={`text-lg ${
                lightmode ? "text-black" : "dark:text-gray-300"
              }`}
            >
              {currentQuestionIndex + 1} sur {currentSection.questions.length}{" "}
              questions
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <div>
              <ul
                className={`items-center w-full text-sm font-medium bg-white border border-gray-200 rounded-lg sm:flex ${
                  lightmode
                    ? "text-gray-900"
                    : "dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                }`}
              >
                {api[currentSectionIndex]?.questions[
                  currentQuestionIndex
                ]?.Options?.map((option: any, index: any) => (
                  <li
                    key={index}
                    className={`w-full border-b sm:border-b-0 sm:border-r ${
                      lightmode ? "border-gray-200" : "dark:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center ps-3">
                      <input
                        id={`react-checkbox-list-${currentQuestionIndex}-${index}`}
                        type="checkbox"
                        value={option}
                        onChange={() =>
                          handleOptionSelect(currentQuestionIndex, index)
                        }
                        checked={
                          selectedOptions[currentSectionIndex][
                            currentQuestionIndex
                          ][index]
                        }
                        className={`w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 ${
                          lightmode
                            ? "bg-gray-100"
                            : "dark:bg-gray-600 dark:border-gray-500"
                        }`}
                      />
                      <label
                        htmlFor={`react-checkbox-list-${currentQuestionIndex}-${index}`}
                        className={`w-full py-3 ms-2 text-sm font-medium ${
                          lightmode ? "text-gray-900" : "dark:text-gray-300"
                        }`}
                      >
                        {option}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="container flex items-start justify-end gap-4 mt-8">
                <div className="flex items-start gap-4">
                  {currentQuestionIndex > 0 || currentSectionIndex > 0 ? (
                    <button
                      onClick={handlePreviousQuestion}
                      className="px-4 py-2 text-white rounded-md"
                      style={{
                        backgroundColor: lightmode ? "blue" : "darkblue",
                      }}
                    >
                      Previous
                    </button>
                  ) : null}
                  {currentQuestionIndex <
                    api[currentSectionIndex].questions.length - 1 ||
                  currentSectionIndex < api.length - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      className="px-4 py-2 text-white rounded-md"
                      style={{
                        backgroundColor: lightmode ? "blue" : "darkblue",
                      }}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      // onClick={handleSubmit}
                      className="px-4 py-2 text-white rounded-md"
                      style={{
                        backgroundColor: lightmode ? "blue" : "darkblue",
                      }}
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
    </div>
  );

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
}
