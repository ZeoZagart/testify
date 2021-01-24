import {Answer, Question, Section, Test} from "../TestCreator/Test";

const s1q1: Question = {
    maxMarks: 3,
    questionText: "What is 2 + 2?"
}

const s1a1: Answer = {
    marksObtained: -1,
    answerText: "4"
}

const s1q2: Question = {
    maxMarks: 3,
    questionText: "Longer question what is 2 + 2? asjdhaskd haskjhdaksjhdkj ashdkjashdkjashdkj\nashdajshdkajsd\najshdkasjdhjkasdhakjsd haskjdasdjhaskd jnasdkjasdk\nalskdjaslkdjaslkdjalskdjlasjdiu2enwdlx asjnxaslxuqef .ncaso;cinlcxa;noisncx;alsdja kdsjhalksdjalsjdhakjsd\nahdkajsdhkjashdkjasd\nkajshdkjahsdkjashdkjahsdkjahsduiqwnxkqwx\niasjhdaisdjniuqwnxk asnxiuasnxnsxiasnx\niadkajsdkasdhjiuqwnxkaiuqbiqwnbxjasbcv d2yvcxbkuqbixu1asxnisaxjbaxqwub"
}

const s1a2: Answer = {
    marksObtained: -1,
    answerText: "Longer answer it is 4"
}


const s2q1: Question = {
    maxMarks: 3,
    questionText: "What is 2 + 2?"
}

const s2a1: Answer = {
    marksObtained: -1,
    answerText: "4"
}

const s2q2: Question = {
    maxMarks: 3,
    questionText: "Longer question what is 2 + 2?"
}

const s2a2: Answer = {
    marksObtained: -1,
    answerText: "Longer answer it is 4"
}

const qa1List = [{question: s1q1,answer: s1a1}, {question: s1q2,answer: s1a2}]
const qa2List = [{question: s2q1,answer: s2a1}, {question: s2q2,answer: s2a2}]

const s1: Section = {
    questionAnswers: qa1List,
    name: "Difficult Mathematics",
    maxMarks: qa1List.map(qa => qa.question.maxMarks).reduce((acc, curr) => acc + curr, 0),
    marksObtained: qa1List.map(qa => qa.answer.marksObtained).reduce((acc, cur) => acc + cur, 0)
}

const s2: Section = {
    questionAnswers: qa2List,
    name: "This is very Difficult &&& very very long Mathematics",
    maxMarks: qa2List.map(qa => qa.question.maxMarks).reduce((acc, curr) => acc + curr, 0),
    marksObtained: qa2List.map(qa => qa.answer.marksObtained).reduce((acc, cur) => acc + cur, 0)
}

const sections = [s1, s2]
const test: Test = {
    sections: [s1, s2],
    name: "CS@#$ Mid Sem Exam",
    maxMarks: sections.map(section => section.maxMarks).reduce((acc, cur) => acc + cur, 0),
    marksObtained: sections.map(section => section.marksObtained).reduce((acc, cur) => acc + cur, 0)
}

export default test