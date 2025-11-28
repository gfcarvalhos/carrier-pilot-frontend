import { Feature } from "../../../../components/Feature"
import { features } from "../../../../components/Feature/data"
import { SectionHeader } from "../../../../components/SectionHeader"
import './styles.css'


export const FeatureSection = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <SectionHeader
            title="Recursos inteligentes"
            subtitle={`Tecnologia avançada para seu desenvolvimento`}
        />
        <div className="audience-cards">
          {features.map((c, i) => <Feature {...c} key={i}/>)}
        </div>
      </div>
    </section>
  )
}