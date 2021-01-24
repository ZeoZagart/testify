import React, {useState} from "react";
import './Test.scss'

export type Question = {
    maxMarks: number
    questionText: string
}

export type Answer = {
    marksObtained: number
    answerText: string
}

export type QuestionAnswer = {
    question: Question
    answer: Answer
}

export type Section = {
    questionAnswers: QuestionAnswer[]
    name: string
    maxMarks: number
    marksObtained: number
}

export type Test = {
    sections: Section[]
    name: string
    maxMarks: number
    marksObtained: number
}

const SeparatorLine = ({horizontalMargin}: {horizontalMargin: number}) => {
    return (
        <hr style={{
            marginLeft: horizontalMargin,
            marginRight: horizontalMargin,
        }}/>
    )
}

const TestView = ({test, onTestModified}: {test: Test, onTestModified: (test: Test) => void}) => {
    const [currentTest, setCurrentTest] = useState(test)

    const addSection = () => {
        console.log(`Current test set to: ${currentTest}`)
    }

    function removeSection(section: Section) {
        setCurrentTest({
            ...currentTest,
            sections: currentTest.sections.filter(current => current !== section)
        })
        onTestModified(test)
    }

    const getSectionViews = () => {
        return currentTest.sections.map((section, index) => {
            return (
                <>
                    <SectionView key={index} section={section} onRemoveClick={() => removeSection(section)}/>
                    <SeparatorLine horizontalMargin={10}/>
                </>
            )
        })
    }

    return (
        <div className={`test_view`}>
            <h1 className={`test_name`}>{`${currentTest.name}`}</h1>
            <br />
            <SeparatorLine horizontalMargin={0}/>
            <div className={`test_content`}>
                <br />
                { getSectionViews() }
            </div>
            <button onClick={addSection}>Add Section</button>
        </div>
    )
}

const SectionView = ({section, onRemoveClick}: {section: Section, onRemoveClick: () => void}) => {
    const [currentSection, setSection] = useState(section)

    const removeSection = () => {
        console.log(`Section delete called: ${section}`)
        onRemoveClick()
    }

    const removeQuestion = (QA: QuestionAnswer) => {
        setSection({
            ...currentSection,
            questionAnswers: currentSection.questionAnswers.filter(curQA => curQA !== QA)
        })
    }

    const getQuestionAnswersView = () => {
        return currentSection.questionAnswers.map((QA, index) =>
            <>
                <QuestionAnswerView
                    key={index}
                    questionAnswer={QA}
                    questionNo={index + 1}
                    onRemoveClick={() => removeQuestion(QA)}/>
                {index !== currentSection.questionAnswers.length - 1 && <SeparatorLine horizontalMargin={30}/>}
            </>
        )
    }

    return (
        <div className={`section_view`}>
            <div className={`removable_section_heading`}>
                <h2 className={`section_heading`}>{section.name}</h2>
                <button onClick={removeSection}>Remove section</button>
            </div>
            <br />
            {getQuestionAnswersView()}
        </div>
    )
}

type QuestionAnswerViewPropType = {questionAnswer: QuestionAnswer, onRemoveClick: () => void, questionNo: number}
const QuestionAnswerView = ({questionAnswer, onRemoveClick, questionNo}: QuestionAnswerViewPropType) => {
    const removeQuestion = () => {
        console.log(`Remove question clicked`)
        onRemoveClick()
    }

    return (
        <div className={`question_answer_view`}>
            <div className={`removable_question_field`}>
                <h4 className={`field_name`}>{`Q. ${questionNo}:`}</h4>
                <QuestionView question={questionAnswer.question}/>
                <button onClick={removeQuestion}>Remove Question</button>
            </div>
            <div className={`answer_field`}>
                <h4 className={`field_name`}>{`Ans:`}</h4>
                <AnswerView  answer={questionAnswer.answer}/>
            </div>
        </div>
    )
}

const QuestionView = ({question}: {question: Question}) => {
    return (
        <div className={`question_view`}>
            <h4 className={`question_text`}>{question.questionText}</h4>
            <h4 className={`question_marks`}>{`marks: ${question.maxMarks}`}</h4>
        </div>
    )
}

const AnswerView = ({answer}: {answer: Answer}) => {
    return (
        <h4 className={`answer_view`}>{answer.answerText}</h4>
    )
}

export default TestView
