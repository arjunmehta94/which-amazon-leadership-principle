import Head from 'next/head'
import Home from '../components/Home'
const questions = require('../util/questions.json');

export default function Homee() {
  return <Home questions={questions} />
}
