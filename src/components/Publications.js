import React from 'react';
import PublicationCard from './PublicationsCards'
import './stylesheets/publications.css'
import MediaQuery, {useMediaQuery} from 'react-responsive'
import './stylesheets/publications.css'
import Beads from '../img/Highlighted/beads.jpg'
import Compare from '../img/Highlighted/comparePlan.jpg'
import Graft from '../img/Highlighted/graft.jpg'
import Linalool from '../img/Highlighted/linalool.jpg'
import Mechanics from '../img/Highlighted/mechanicsDictate.jpg'
import Mouth from '../img/Highlighted/mouth.jpg'
import Size from '../img/Highlighted/planSize.JPG'
import Scrunch from '../img/Highlighted/scrunch.jpg'
import Tissue from '../img/Highlighted/tissue.jpg'
import Zebra from '../img/Highlighted/zebrafish.jpg'


const Publications = () => {
  const isComputer = useMediaQuery({minDeviceWidth:1224})
  const highlightedArticles = [
    {
      names: "D. Hagstrom, L. Truong, S. Zhang, R. L. Tanguay, and E.-M. S. Collins (2019)",
      picture: {Zebra},
      link: "https://academic.oup.com/toxsci/pages/paper_of_the_year_award",
      articleTitle: "Comparative analysis of zebraﬁsh and planarian model systems for developmental neurotoxicity screens using an 87-compound library",
      journal: "Toxicological Sciences",
      news: 'This paper was awarded the “Tox. Sci. Paper of the year 2019” by the Society of Toxicology.'
    },
    {
      names: "P.T. Malinowski*, O. Cochet-Escartin*, K.J. Kaj, E. Ronan, A. Groisman, P.H. Diamond, E.-M. S. Collins (2017)",
      picture: {Mechanics},
      link: "https://pubmed.ncbi.nlm.nih.gov/28973880/",
      articleTitle: "Mechanics dictate where and how freshwater planarians ﬁssion",
      journal: "Proc Natl Acad Sci",
      news: "(* ﬁrst author). Featured in Nature Physics.",
    },
    {
      names: "J.A. Carter*, C. Hyland*, R.E. Steele, E.-M. S. Collins (2016)",
      picture: {Mouth},
      link: "https://pubmed.ncbi.nlm.nih.gov/26958895/",
      articleTitle: "The dynamics of mouth opening in Hydra",
      journal: "Biophysical Journal",
      news: " (* ﬁrst author). Featured as “New and Notable” and BPS “Paper of the year 2016”"
    },
    {
      names: "NEW: D. Ireland, V. Bochenek, D. Chaiken, C. Rabeler, S. Onoe, A. Soni, and E.-M. S. Collins (2020)",
      picture: {Compare},
      link: "https://pubmed.ncbi.nlm.nih.gov/32298908/",
      articleTitle: "Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening",
      journal: "Chemosphere"
    },
    {
      names: "Z. Sabry, A. Ho, D. Ireland, C. Rabeler, O. Cochet-Escartin, and E.-M. S. Collins (2019)",
      picture: {Scrunch},
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6894859/",
      articleTitle: "Pharmacological or genetic targeting of Transient Receptor Potential (TRP) channels can disrupt the planarian escape response.",
      journal: "Plos ONE"
    },
    {
      names: "R. Wang, T. Goel, K. Khazoyan, Z. Sabry, H.J. Quan, P.H. Diamond and E.-M. S. Collins (2019)",
      picture: {Beads},
      link: "https://europepmc.org/article/med/31443907",
      articleTitle: "Mouth Function Determines The Shape Oscillation Pattern In Regenerating Hydra Tissue Spheres.",
      journal: "Biophysical Journal"
    },
    {
      names: "O. Cochet-Escartin, T. Locke, W. Shi, R.E. Steele, E.-M. S. Collins (2017)",
      picture: {Tissue},
      link: "pubmed.ncbi.nlm.nih.gov/29262375/",
      articleTitle: "Physical mechanisms driving cell sorting in Hydra.",
      journal: "Biophysical Journal",
      news: "Featured as “New and Notable"
    },
    {
      names: "X. Yang*, K.J. Kaj*, D.J. Schwab, and E.-M. S. Collins (2017)",
      picture: {Size},
      link: "https://pubmed.ncbi.nlm.nih.gov/28467318/",
      articleTitle: "Coordination of size-control, reproduction and memory in freshwater planarians.",
      journal: "Physical Biology",
      news: "(* ﬁrst author)"
    },
    {
      names: "NEW: R. Wang and E.-M. S. Collins (2020)",
      picture: {Graft},
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0012160620300889?via%3Dihub",
      articleTitle: "A novel bilateral grafting technique for studying patterning in Hydra.",
      journal: "Developmental Biology"
    },
    {
      names: "T. Goel, R. Wang, S. Martin, E. Lanphear, and E.-M. S. Collins (2019)",
      picture: {Linalool},
      link: "https://europepmc.org/article/med/31648269",
      articleTitle: "Linalool acts as a fast and reversible anesthetic in Hydra.",
      journal: "Plos ONE"
    }

  ]

  function printHighlightedArticles(papers){
    var rowSize = 3;
    if(isComputer == false){
        rowSize=1;
    }
    const rows = Math.ceil(papers.length/rowSize);
    var twoDPapers = []
    for(var i = 0; i < rows; i++){
        twoDPapers.push(papers.slice((i*rowSize),  rowSize + i*rowSize))
    }
        return(
            twoDPapers.map((row, index) => (
            <div key = {index} className="row">
                {row.map((paper, secIndex) => (
                  <PublicationCard 
                  key = {secIndex+10}
                  className = "card"
                  names = {paper.names}
                  picture = {paper.picture}
                  link = {paper.link}
                  articleTitle = {paper.articleTitle}
                  journal = {paper.journal}
                  news = {paper.news}/>
                ))}
            </div>
            ))
        )
  }

    return (
      <div>
           <h1 className = "Head1">Highlighted Articles</h1>
              {printHighlightedArticles(highlightedArticles)}

          <p className = "undergradsState">The following is a complete list of publications. Undergraduate and student authors are underlined:</p>
          <h3 className = "Head3">Neurotoxicology and Planarian Behavior</h3>
          <table className = "container">
            <tbody>
              <useMediaQuery minDeviceWidth={724}>
                <tr>
                    <td className = "sentences">D. Ireland, <u>V. Bochenek, D. Chaiken,</u> C. Rabeler, <u>S. Onoe</u>, A. Soni, and E.-M. S. Collins
                    (2020), <i>Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening</i>.
                        Chemosphere, PMID: 32298908.</td>
                    <td><form action="https://www.biorxiv.org/content/10.1101/2020.01.23.917047v1.full.pdf" target="_blank">
                          <button className="PDF">PDF</button>
                        </form></td>
                </tr>
              </useMediaQuery>
              <MediaQuery maxWidth={724}>
                    <tr>
                      <td className = "sentences-small">D. Ireland, <u>V. Bochenek, D. Chaiken,</u> C. Rabeler, <u>S. Onoe</u>, A. Soni, and E.-M. S. Collins
                    (2020), <i>Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening</i>.
                        Chemosphere, PMID: 32298908.
                      </td>
                    </tr>
                    <tr className="center">
                      <td>
                        <form action="https://www.biorxiv.org/content/10.1101/2020.01.23.917047v1.full.pdf" target="_blank">
                          <button className="PDF">PDF</button>
                        </form>
                      </td>
                    </tr>
              </MediaQuery>
              <tr>
                  <td className = "sentences"><u>Z. Sabry, A. Ho</u>, D. Ireland, C. Rabeler, O. Cochet-Escartin, and E.-M. S. Collins
                  (2019), <i>Pharmacological or genetic targeting of Transient Receptor Potential (TRP) channels can disrupt the planarian escape response</i>.
                   Plos ONE, PMID: 31805147.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6894859/pdf/pone.0226104.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">S. Zhang, D. Ireland, N. Sipes, M. Behl, and E.-M. S. Collins
                  (2019), <i>Screening for neurotoxic potential of 15 ﬂame retardants using freshwater planarians</i>.
                  Neurotoxicology and Teratology, PMID: 30943442.</td>
                  <td><form action="https://www.biorxiv.org/content/10.1101/538280v1.full.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">D. Hagstrom, L. Truong, S. Zhang, R. L. Tanguay, and E.-M. S. Collins
                  (2019), <i>Comparative analysis of zebraﬁsh and planarian model systems for developmental neurotoxicity screens using an 87-compound library</i>.
                  Toxicological Sciences, PMID: 30011007. <br></br>This paper was awarded the “Tox. Sci. Paper of the year 2019” by the Society of Toxicology.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/pmid/30011007/" target="_blank">
                    <button className="PDF">Link</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">S. Zhang, D. Hagstrom, <u>P. Hayes, A. Graham</u>, and E.-M. S. Collins
                  (2019), <i>Multi-behavioral endpoint testing of an 87-chemical compound library in freshwater planarians</i>.
                  Toxicological Sciences, PMID: 29893936.</td>
                  <td><form action="https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC6657585&blobtype=pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">D. Hagstrom, S. Zhang, <u>A. Ho, E.S. Tsai</u>, Z. Radic, <u>A. Jahromi, Y. He, K.J. Kaj</u>, P. Taylor, and E.-M. S. Collins
                  (2018), <i>Planarian cholinesterase: molecular and functional characterization of an evolutionarily ancient enzyme to study organophosphorus pesticide toxicity</i>.
                  Archives of Toxicology, PMID: 29167930.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6413736/pdf/nihms-1007053.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">D. Hagstrom, H. Hirokawa, Z. Radic, L. Zhang, P. Taylor, and E.-M. S. Collins (2016),
                  <i>Planarian cholinesterase: in vitro characterization of an evolutionarily ancient enzyme to study organophosphorus pesticide toxicity and reactivation</i>.
                  Archives of Toxicology, PMID: 27990564.</td>
                  <td><form action="https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC6485937&blobtype=pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">O. Cochet-Escartin*, <u>J.A. Carter*, M. Chakraverti-Wuerthwein*, J. Sinha</u>, and E.-M. S. Collins
                  (2016), <i>Slo1 regulates ethanol-induced scrunching in freshwater planarians</i>.
                  Physical Biology PMID: 27609598. <br></br>(* ﬁrst author)</td>
                  <td><form action="https://iopscience.iop.org/article/10.1088/1478-3975/13/5/055001" target="_blank">
                    <button className="PDF">Link</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">D. Hagstrom, O. Cochet-Escartin, and E.-M. S. Collins
                  (2016), <i>Planarian brain regeneration as a model system for developmental neurotoxicology</i>.
                  Regeneration, DOI 10.1002/reg2.52.</td>
                  <td><form action="https://onlinelibrary.wiley.com/doi/epdf/10.1002/reg2.52" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">D. Hagstrom, O. Cochet-Escartin, S. Zhang, C. Khuu, and E.-M. S. Collins (2015)
                  <i>, Freshwater Planarians as a New Invertebrate System for Neurotoxicology</i>
                  . Toxicological Sciences, PMID: 26116028.</td>
                  <td><form action="https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC4838007&blobtype=pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">J.A. Talbot, K.W. Currie, B.J. Pearson, and E.-M. S. Collins (2014),
                  <i> Smed-dynA-1 is a nervous system speciﬁc dynamin in the planarian Schmidtea mediterranea required for normal locomotion</i>
                  . Biology Open, PMID: 24950970.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4154299/pdf/bio-03-07-627.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
            </tbody>
          </table>

          <h3 className = "Head2">Biomechanics</h3>
          <table className = "container">
            <tbody>
              <tr>
                  <td className = "sentences">R. Wang, T. Goel, <u>K. Khazoyan, Z. Sabry, H.J. Quan</u>, P.H. Diamond and E.-M. S. Collins (2019),
                  <i> Mouth Function Determines The Shape Oscillation Pattern In Regenerating Hydra Tissue Spheres. </i>
                  Biophysical Journal, PMID: 31443907.</td>
                  <td><form action="https://www.biorxiv.org/content/10.1101/565465v1.full.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">K. Chiou and E.-M. S. Collins (2018),
                  <i> Review: Why we need mechanics to understand animal regeneration. </i>
                  Developmental Biology, PMID: 29179947.</td>
                  <td><form action="https://reader.elsevier.com/reader/sd/pii/S0012160617303500?token=3000D4E068A1BE89560396F5590C8FB5C56B9D5EF5C7E9D8100B609BE7FEB15F5E22EA6A2948782D6725840140F1A7C8" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">O. Cochet-Escartin, T. Locke, <u>W. Shi</u>, R.E. Steele, E.-M. S. Collins (2017),
                  <i> Physical mechanisms driving cell sorting in Hydra. </i>
                   Biophysical Journal, PMID: 29262375.<br></br>Featured as “New and Notable”.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5771031/pdf/main.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><u>P.T. Malinowski*<u>, O. Cochet-Escartin*, </u>K.J. Kaj</u>, E. Ronan, A. Groisman, P.H. Diamond, E.-M. S. Collins (2017),
                  <i> Mechanics dictate where and how freshwater planarians ﬁssion. </i>
                  Proc Natl Acad Sci, PMID: 28973880.<br></br>(* ﬁrst author) Featured in Nature Physics.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5642676/pdf/pnas.201700762.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><u>J.A. Carter*</u>, C. Hyland*, R.E. Steele, E.-M. S. Collins (2016),
                  <i> The dynamics of mouth opening in Hydra. </i>
                  Biophysical Journal, PMID: 26958895.<br></br>(* ﬁrst author) Featured as “New and Notable” and BPS “Paper of the year 2016”.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4788721/pdf/main.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">O. Cochet-Escartin, K. Mickolajczyk, and E.-M. S. Collins (2015),
                  <i> Scrunching: A novel escape gait in planarians. </i>
                  Physical Biology, PMID: 26356147.</td>
                  <td><form action="https://pubmed.ncbi.nlm.nih.gov/26356147/" target="_blank">
                    <button className="PDF">Link</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">E.-M. Schotz, <u>M. Lanio</u>, J.A. Talbot, and M.L. Manning (2013),
                  <i> Glassy dynamics in threedimensional embryonic tissues. </i>
                  Journal of the Royal Society Interface, PMID: 24068179.</td>
                  <td><form action="https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC3808551&blobtype=pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">M.L. Manning, R.A. Foty, M.S. Steinberg, and E.-M. Schotz (2010),
                  <i> Coaction of intercellular adhesion and cortical tension speciﬁes tissue surface tension. </i>
                  Proc Natl Acad Sci, PMID: 20616053.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2906578/pdf/pnas.1003743107.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">E.-M. Schotz (2008),
                  <i> Dynamics and Mechanics of Zebraﬁsh Embryonic Tissues - A study of the physical properties of zebraﬁsh germlayer cells and tissues and cell dynamics during early embryogenesis, </i>
                   VDM publishing group.</td>
                  <td><button className="PDF">N/A</button></td>
              </tr>
            </tbody>
          </table>


          <h3 className = "Head2">Population Statistics and Evolution</h3>
          <table className = "container">
            <tbody>
              <tr>
                  <td className = "sentences">X. Yang*, <u>K.J. Kaj*</u>, D.J. Schwab, and E.-M. S. Collins (2017),
                  <i> Coordination of size-control, reproduction and memory in freshwater planarians. </i>
                  Physical Biology, PMID: 28467318.<br></br>(* ﬁrst author)</td>
                  <td><form action="https://arxiv.org/pdf/1703.04788.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><u>J.A. Carter, C.H. Lind, M.P. Truong</u>, and E.-M. S. Collins (2015),
                  <i> To each his own: Reproductive Strategies and Success of Three Common Planarian Species: Schmidtea mediterranea, Dugesia japonica and Dugesia tigrina. </i>
                  J. Stat. Phys., DOi 10.1007/s10955-015-1310-1.</td>
                  <td><form action="https://www.deepdyve.com/lp/springer-journals/to-each-his-own-5Sraz9V0uB" target="_blank">
                    <button className="Link">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><u>M.A. Thomas, S. Quinodoz</u>, and E.-M. Schotz (2012),
                  <i> Size matters! Birth size and a size independent stochastic term determine asexual reproduction dynamics in freshwater planarians. </i>
                  J. Stat. Phys., DOI: 10.1007/s10955-012-0514-x.</td>
                  <td><form action="https://link.springer.com/article/10.1007/s10955-012-0514-x" target="_blank">
                    <button className="Link">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><u>S. Quinodoz, M.A. Thomas</u>, J. Dunkel, and E.-M. Schotz (2011),
                  <i> The more the merrier? Entropy and statistics of asexual reproduction in freshwater planarians. </i>
                  J. Stat. Phys., DOI: 10.1007/s10955-011-0157-3.<br></br>This article was featured in the Ivy League Week.</td>
                  <td><form action="https://link.springer.com/article/10.1007/s10955-011-0157-3" target="_blank">
                    <button className="Link">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">J. Dunkel, J.A. Talbot, and E.-M. Schotz (2011),
                  <i> Memory and obesity aﬀect the population dynamics of asexual freshwater planarians. </i>
                  Physical Biology, PMID: 21263170. </td>
                  <td><form action="https://pubmed.ncbi.nlm.nih.gov/21263170/" target="_blank">
                    <button className="Link">PDF</button>
                  </form></td>
              </tr>
            </tbody>
          </table>


          <h3 className = "Head2">Developmental Biology</h3>
          <table className = "container">
            <tbody>
              <tr>
                  <td className = "sentences">B.G. Lambrus, O. Cochet-Escartin, P.A. Newmark , E.-M. S. Collins*, and J.J. Collins* (2015),
                  <i> Tryptophan hydroxylase gene function is required for eye melanogenesis in the planarian Schmidtea mediterranea. </i>
                   Plos ONE, PMID: 26017970. <br></br>(* corresponding author).</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4446096/pdf/pone.0127074.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">E.-M. Schotz, R.D. Burdine, F. Julicher, M.S. Steinberg, C.-P. Heisenberg, and R.A.Foty (2008),
                  <i> Quantitative Diﬀerences in Tissue Surface Tension Inﬂuence Zebraﬁsh Germ Layer Positioning. </i>
                  HFSP Journal, Vol.2 (1), pp. 1-56.</td>
                  <td><form action="https://www.tandfonline.com/doi/abs/10.2976/1.2834817#aHR0cHM6Ly93d3cudGFuZGZvbmxpbmUuY29tL2RvaS9wZGYvMTAuMjk3Ni8xLjI4MzQ4MTc/bmVlZEFjY2Vzcz10cnVlQEBAMA==" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">F. Ulrich*, M. Krieg*, E.-M. Schoetz*, V. Link, I. Castanon, V. Schnabel, A. Taubenberger, D. Mueller, P.-H. Puech, C.-P. Heisenberg.
                  <i> Wnt11 Functions in Gastrulation by Controlling Cell Cohesion through Rab5c and E Cadherin, </i>
                  Developmental Cell, Vol.9, 555564 (2005).<br></br>(* first author)</td>
                  <td><form action="https://reader.elsevier.com/reader/sd/pii/S1534580705003059?token=6DFC5D8DE8E74F2C62C16E22DD79DE9ED4239928927344EEF13FCCC01418699BCEB670D639C23F69299A9F7B796E21BB" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
            </tbody>
          </table>


          <h3 className = "Head2">Methods and Techniques</h3>
          <table className = "container">
            <tbody>
              <tr>
                  <td className = "sentences">R. Wang and E.-M. S. Collins (2020),
                  <i> A novel bilateral grafting technique for studying patterning in Hydra. </i>
                  Developmental Biology, PMID: 32165148.</td>
                  <td><form action="https://www.sciencedirect.com/science/article/abs/pii/S0012160620300889?via%3Dihub" target="_blank">
                    <button className="PDF">Link</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">T. Goel, R. Wang, S. Martin, <u>E. Lanphear</u>, and E.-M. S. Collins (2019),
                  <i> Linalool acts as a fast and reversible anesthetic in Hydra. </i>
                  Plos ONE, PMID: 31648269.</td>
                  <td><form action="https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC6812832&blobtype=pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><u>C. Tran, S. Fu, T. Rowe</u>, and E.-M. S. Collins (2017),
                  <i> Generation and long-term maintenance of nerve-free Hydra vulgaris, </i>
                  J. Vis. Exp.(125), e56115.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5609432/pdf/jove-125-56115.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><u>J.P. Dexter*, M.B. Tamme*, C.H. Lind*</u>, and E.-M. S. Collins (2014).
                  <i> On-chip immobilization of planarians for in vivo imaging. </i>
                  Nature Scientific Reports, DOI: 10.1038/srep06388.</td>
                  <td><form action="https://www.nature.com/articles/srep06388.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><u>M.A. Thomas</u> and E.-M. Schoetz (2011).
                  <i> SAPling: A Scan-Add-Print barcoding database system to label and track asexual organisms. </i>
                   Journal of Experimental Biology, PMID: 21993779.</td>
                  <td><form action="https://jeb.biologists.org/content/jexbio/214/21/3518.full.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">J.A. Talbot and E.-M. Schotz (2011),
                  <i> Quantitative characterization of planarian wildtype behavior as a platform for screening locomotion phenotypes. </i>
                  J Experimental Biology, PMID: 21389189.</td>
                  <td><form action="https://jeb.biologists.org/content/jexbio/214/7/1063.full.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
            </tbody>
          </table>

          <h3 className = "Head2">Outreach and Education</h3>
          <table className = "container">
            <tbody>
              <tr>
                  <td className = "sentences"><u>Vista SSEP Mission 11 Team</u>, D. Hagstrom, C. Bartee, and E.-M. S. Collins (2018),
                  <i> Studying Planarian Regeneration Aboard the International Space Station within the Student Space Flight Experimental Program. </i>
                  Frontiers in Astronomy and Space Sciences, doi.org/10.3389/fspas.2018.00012.</td>
                  <td><form action="https://www.frontiersin.org/articles/10.3389/fspas.2018.00012/full" target="_blank">
                    <button className="PDF">Link</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">E.-M. S. Collins and T.R. Calhoun (2014),
                  <i> Raising the bar in freshman science education. Journal of College Science Teaching, </i>
                  Vol. 43 (4), pp. 26-35.</td>
                  <td><form action="https://www.jstor.org/stable/pdf/43632009.pdf?refreqid=excelsior%3Adad43b007f80934cfec399758102bc74" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">E.-M. Schoetz, S. Barolo, R.J. Full, O. Gigliotta, F. Grey, E.C. Guinan, J. Lee, A. Lindner, R. B. Lotto, D. Misevic, T. E. Murphy, J. Niemela, Z. Popovic, L. Riboli-Sasco, I. Riedel-Kruse, M.F. Schatz, T. Schaus, M.D. Shattuck, Ke. Showalter, K.O. Stanley, H.L. Swinney, L. Xu, and F. Taddei (2012).
                  <i> Training the next generation of "night scientists" </i>
                  (Workshop Summary), ICASE Newsletter_052012.</td>
                  <td><form action="https://www.archive.cri-paris.org/wp-content/uploads/Workshop-Summary-article_nightscience-July-2011.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
            </tbody>
          </table>
      </div>
    );
}

export default Publications;
