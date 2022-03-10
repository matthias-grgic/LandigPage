import styled from 'styled-components'

function Impressum() {
  return (
    <>
      <h1>IMPRESSUM</h1>
      <ImpressumStyled>{`


      Orange Hive GmbH
      Lindleystr. 12
      60314 Frankfurt am Main
      Deutschland
      
      Tel.: +49 (0)69 15 04 66 000
      Fax: +49 (0)69 15 04 66 063
      
      E-Mail: hello@orangehive.de
      
      Vertretungsberechtigte Geschäftsführer:
      Laura Geisler, Steven Sasseville, Carsten Scheele
      Sitz der Gesellschaft: Frankfurt am Main
      Registergericht: Amtsgericht Frankfurt am Main
      Registernummer: HRB 84750
      Umsatzsteueridentifikationsnummer gemäß §27a
      Umsatzsteuergesetz: DE 265701188
      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
      Laura Geisler, Steven Sasseville, Carsten Scheele
      
      Haftung für Inhalte
      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 6 Abs.1 MDStV und § 8 Abs.1 TDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Diensteanbieter sind jedoch nicht verpflichtet, die von ihnen übermittelten oder gespeicherten fremden Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei bekannt werden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      
      Haftung für Links
      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei bekannt werden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      
      
      Urheberrecht
      Die Betreiber der Seiten sind bemüht, stets die Urheberrechte anderer zu beachten bzw. auf selbst erstellte sowie lizenzfreie Werke zurückzugreifen. Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
     
     
     
      `}</ImpressumStyled>
    </>
  )
}

export default Impressum

const ImpressumStyled = styled.div`
  display: block;
  white-space: pre-line;
  width: 60%;
  height: auto;
`
