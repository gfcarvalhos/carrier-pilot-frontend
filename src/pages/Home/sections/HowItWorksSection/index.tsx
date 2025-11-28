import './styless.css'
import { SectionHeader } from "../../../../components/SectionHeader"
import { Step } from "../../../../components/Step"
import { steps } from "../../../../components/Step/data"


export const HowItWorksSection = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <SectionHeader
            title="Como funciona"
            subtitle={`Transformamos sua jornada profissional em ${steps.length} etapas simples`}
        />
        <div className="steps-container">
          {steps.map((s, i) => <Step {...s} key={i} />)}
        </div>
      </div>
    </section>
  )
}