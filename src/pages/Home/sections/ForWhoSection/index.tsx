import { AudienceCard } from "../../../../components/AudienceCard"
import { audCards } from "../../../../components/AudienceCard/data"
import { SectionHeader } from "../../../../components/SectionHeader"
import './styles.css'


export const ForWhoSection = () => {
  return (
    <section className="for-who" id="for-who">
      <div className="container">
        <SectionHeader
            title="Para quem é o CarrierPilot.AI?"
            subtitle={`Soluções personalizadas para diferentes perfis`}
        />
        <div className="audience-cards">
          {audCards.map((c, i) => <AudienceCard {...c} key={i}/>)}
        </div>
      </div>
    </section>
  )
}