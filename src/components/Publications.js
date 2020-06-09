import React from 'react';
import PublicationCard from './PublicationsCards'
import image from '../img/slideshowimgs/img3.jpg'
import './stylesheets/publications.css'

const Publications = () => {
    return (
      <div>
           <h1 className = "Head1">Highlighted Articles</h1>
               <div className = "table">
                   <PublicationCard className = "card"
                                    names = "D. Hagstrom, L. Truong, S. Zhang, R. L. Tanguay, and E.-M. S. Collins (2019)"
                                    picture = {image}
                                    link = "https://academic.oup.com/toxsci/pages/paper_of_the_year_award"
                                    articleTitle = "Comparative analysis of zebraﬁsh and planarian model systems for developmental neurotoxicity screens using an 87-compound library"
                                    journal = "Toxicological Sciences"
                                    news = 'This paper was awarded the “Tox. Sci. Paper of the year 2019” by the Society of Toxicology.'
                                    />
                   <PublicationCard className = "card"
                                    names = "P.T. Malinowski*, O. Cochet-Escartin*, K.J. Kaj, E. Ronan, A. Groisman, P.H. Diamond, E.-M. S. Collins (2017)"
                                    picture = {image}
                                    link = "https://pubmed.ncbi.nlm.nih.gov/28973880/"
                                    articleTitle = "Mechanics dictate where and how freshwater planarians ﬁssion"
                                    journal = "Proc Natl Acad Sci"
                                    news = "(* ﬁrst author). Featured in Nature Physics."
                                    />
                   <PublicationCard className = "card"
                                    names = "J.A. Carter*, C. Hyland*, R.E. Steele, E.-M. S. Collins (2016)"
                                    picture = {image}
                                    link = "https://pubmed.ncbi.nlm.nih.gov/26958895/"
                                    articleTitle = "The dynamics of mouth opening in Hydra"
                                    journal = "Biophysical Journal"
                                    news = " (* ﬁrst author). Featured as “New and Notable” and BPS “Paper of the year 2016”"
                                    />
               </div>
               <div className = "table">
                   <PublicationCard className = "card"
                                    names = "NEW: D. Ireland, V. Bochenek, D. Chaiken, C. Rabeler, S. Onoe, A. Soni, and E.-M. S. Collins (2020)"
                                    picture = {image}
                                    link = "https://pubmed.ncbi.nlm.nih.gov/32298908/"
                                    articleTitle = "Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening"
                                    journal = "Chemosphere"
                                    />
               </div>

          <p className = "undergradsState">The following is a complete list of publications. Undergraduate authors are underlined:</p>
          <h3 className = "Head3">Neurotoxicology and Planarian Behavior</h3>
          <table className = "container">
              <tr>
                  <td className = "sentences">D. Ireland, <under>V. Bochenek, D. Chaiken,</under> C. Rabeler, <under>S. Onoe</under>, A. Soni, and E.-M. S. Collins
                  (2020), <italic>Dugesia japonica is the best suited of three planarian species for high-throughput toxicology screening</italic>.
                      Chemosphere, PMID: 32298908.</td>
                  <td><form action="https://www.biorxiv.org/content/10.1101/2020.01.23.917047v1.full.pdf" target="_blank">
                        <button className="PDF">PDF</button>
                      </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><under>Z. Sabry, A. Ho</under>, D. Ireland, C. Rabeler, O. Cochet-Escartin, and E.-M. S. Collins
                  (2019), <italic>Pharmacological or genetic targeting of Transient Receptor Potential (TRP) channels can disrupt the planarian escape response</italic>.
                   Plos ONE, PMID: 31805147.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6894859/pdf/pone.0226104.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">S. Zhang, D. Ireland, N. Sipes, M. Behl, and E.-M. S. Collins
                  (2019), <italic>Screening for neurotoxic potential of 15 ﬂame retardants using freshwater planarians</italic>.
                  Neurotoxicology and Teratology, PMID: 30943442.</td>
                  <td><form action="https://www.biorxiv.org/content/10.1101/538280v1.full.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">D. Hagstrom, L. Truong, S. Zhang, R. L. Tanguay, and E.-M. S. Collins
                  (2019), <italic>Comparative analysis of zebraﬁsh and planarian model systems for developmental neurotoxicity screens using an 87-compound library</italic>.
                  Toxicological Sciences, PMID: 30011007. <br></br>This paper was awarded the “Tox. Sci. Paper of the year 2019” by the Society of Toxicology.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/pmid/30011007/" target="_blank">
                    <button className="PDF">Link</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">S. Zhang, D. Hagstrom, <under>P. Hayes, A. Graham</under>, and E.-M. S. Collins
                  (2019), <italic>Multi-behavioral endpoint testing of an 87-chemical compound library in freshwater planarians</italic>.
                  Toxicological Sciences, PMID: 29893936.</td>
                  <td><form action="https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC6657585&blobtype=pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">D. Hagstrom, S. Zhang, <under>A. Ho, E.S. Tsai</under>, Z. Radic, <under>A. Jahromi, Y. He, K.J. Kaj</under>, P. Taylor, and E.-M. S. Collins
                  (2018), <italic>Planarian cholinesterase: molecular and functional characterization of an evolutionarily ancient enzyme to study organophosphorus pesticide toxicity</italic>.
                  Archives of Toxicology, PMID: 29167930.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6413736/pdf/nihms-1007053.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">D. Hagstrom, H. Hirokawa, Z. Radic, L. Zhang, P. Taylor, and E.-M. S. Collins (2016),
                  <italic>Planarian cholinesterase: in vitro characterization of an evolutionarily ancient enzyme to study organophosphorus pesticide toxicity and reactivation</italic>.
                  Archives of Toxicology, PMID: 27990564.</td>
                  <td><form action="https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC6485937&blobtype=pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">O. Cochet-Escartin*, <under>J.A. Carter*, M. Chakraverti-Wuerthwein*, J. Sinha</under>, and E.-M. S. Collins
                  (2016), <italic>Slo1 regulates ethanol-induced scrunching in freshwater planarians</italic>.
                  Physical Biology PMID: 27609598. <br></br>(* ﬁrst author)</td>
                  <td><form action="https://iopscience.iop.org/article/10.1088/1478-3975/13/5/055001" target="_blank">
                    <button className="PDF">Link</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">D. Hagstrom, O. Cochet-Escartin, and E.-M. S. Collins
                  (2016), <italic>Planarian brain regeneration as a model system for developmental neurotoxicology</italic>.
                  Regeneration, DOI 10.1002/reg2.52.</td>
                  <td><form action="https://onlinelibrary.wiley.com/doi/epdf/10.1002/reg2.52" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">D. Hagstrom, O. Cochet-Escartin, S. Zhang, C. Khuu, and E.-M. S. Collins (2015)
                  <italic>, Freshwater Planarians as a New Invertebrate System for Neurotoxicology</italic>
                  . Toxicological Sciences, PMID: 26116028.</td>
                  <td><form action="https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC4838007&blobtype=pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">J.A. Talbot, K.W. Currie, B.J. Pearson, and E.-M. S. Collins (2014),
                  <italic> Smed-dynA-1 is a nervous system speciﬁc dynamin in the planarian Schmidtea mediterranea required for normal locomotion</italic>
                  . Biology Open, PMID: 24950970.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4154299/pdf/bio-03-07-627.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
          </table>

          <h3 className = "Head2">Biomechanics</h3>
          <table className = "container">
              <tr>
                  <td className = "sentences">R. Wang, T. Goel, <under>K. Khazoyan, Z. Sabry, H.J. Quan</under>, P.H. Diamond and E.-M. S. Collins (2019),
                  <italic> Mouth Function Determines The Shape Oscillation Pattern In Regenerating Hydra Tissue Spheres. </italic>
                  Biophysical Journal, PMID: 31443907.</td>
                  <td><form action="https://www.biorxiv.org/content/10.1101/565465v1.full.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">K. Chiou and E.-M. S. Collins (2018),
                  <italic> Review: Why we need mechanics to understand animal regeneration. </italic>
                  Developmental Biology, PMID: 29179947.</td>
                  <td><form action="https://reader.elsevier.com/reader/sd/pii/S0012160617303500?token=3000D4E068A1BE89560396F5590C8FB5C56B9D5EF5C7E9D8100B609BE7FEB15F5E22EA6A2948782D6725840140F1A7C8" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">O. Cochet-Escartin, T. Locke, <under>W. Shi</under>, R.E. Steele, E.-M. S. Collins (2017),
                  <italic> Physical mechanisms driving cell sorting in Hydra. </italic>
                   Biophysical Journal, PMID: 29262375.<br></br>Featured as “New and Notable”.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5771031/pdf/main.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><under>P.T. Malinowski*<under>, O. Cochet-Escartin*, </under>K.J. Kaj</under>, E. Ronan, A. Groisman, P.H. Diamond, E.-M. S. Collins (2017),
                  <italic> Mechanics dictate where and how freshwater planarians ﬁssion. </italic>
                  Proc Natl Acad Sci, PMID: 28973880.<br></br>(* ﬁrst author) Featured in Nature Physics.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5642676/pdf/pnas.201700762.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><under>J.A. Carter*</under>, C. Hyland*, R.E. Steele, E.-M. S. Collins (2016),
                  <italic> The dynamics of mouth opening in Hydra. </italic>
                  Biophysical Journal, PMID: 26958895.<br></br>(* ﬁrst author) Featured as “New and Notable” and BPS “Paper of the year 2016”.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4788721/pdf/main.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">O. Cochet-Escartin, K. Mickolajczyk, and E.-M. S. Collins (2015),
                  <italic> Scrunching: A novel escape gait in planarians. </italic>
                  Physical Biology, PMID: 26356147.</td>
                  <td><form action="https://pubmed.ncbi.nlm.nih.gov/26356147/" target="_blank">
                    <button className="PDF">Link</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">E.-M. Schotz, <under>M. Lanio</under>, J.A. Talbot, and M.L. Manning (2013),
                  <italic> Glassy dynamics in threedimensional embryonic tissues. </italic>
                  Journal of the Royal Society Interface, PMID: 24068179.</td>
                  <td><form action="https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC3808551&blobtype=pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">M.L. Manning, R.A. Foty, M.S. Steinberg, and E.-M. Schotz (2010),
                  <italic> Coaction of intercellular adhesion and cortical tension speciﬁes tissue surface tension. </italic>
                  Proc Natl Acad Sci, PMID: 20616053.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2906578/pdf/pnas.1003743107.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">E.-M. Schotz (2008),
                  <italic> Dynamics and Mechanics of Zebraﬁsh Embryonic Tissues - A study of the physical properties of zebraﬁsh germlayer cells and tissues and cell dynamics during early embryogenesis, </italic>
                   VDM publishing group.</td>
                  <td><button className="PDF">N/A</button></td>
              </tr>
          </table>


          <h3 className = "Head2">Population Statistics and Evolution</h3>
          <table className = "container">
              <tr>
                  <td className = "sentences">X. Yang*, <under>K.J. Kaj*</under>, D.J. Schwab, and E.-M. S. Collins (2017),
                  <italic> Coordination of size-control, reproduction and memory in freshwater planarians. </italic>
                  Physical Biology, PMID: 28467318.<br></br>(* ﬁrst author)</td>
                  <td><form action="https://arxiv.org/pdf/1703.04788.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><under>J.A. Carter, C.H. Lind, M.P. Truong</under>, and E.-M. S. Collins (2015),
                  <italic> To each his own: Reproductive Strategies and Success of Three Common Planarian Species: Schmidtea mediterranea, Dugesia japonica and Dugesia tigrina. </italic>
                  J. Stat. Phys., DOi 10.1007/s10955-015-1310-1.</td>
                  <td><form action="https://www.deepdyve.com/lp/springer-journals/to-each-his-own-5Sraz9V0uB" target="_blank">
                    <button className="Link">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><under>M.A. Thomas, S. Quinodoz</under>, and E.-M. Schotz (2012),
                  <italic> Size matters! Birth size and a size independent stochastic term determine asexual reproduction dynamics in freshwater planarians. </italic>
                  J. Stat. Phys., DOI: 10.1007/s10955-012-0514-x.</td>
                  <td><form action="https://link.springer.com/article/10.1007/s10955-012-0514-x" target="_blank">
                    <button className="Link">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><under>S. Quinodoz, M.A. Thomas</under>, J. Dunkel, and E.-M. Schotz (2011),
                  <italic> The more the merrier? Entropy and statistics of asexual reproduction in freshwater planarians. </italic>
                  J. Stat. Phys., DOI: 10.1007/s10955-011-0157-3.<br></br>This article was featured in the Ivy League Week.</td>
                  <td><form action="https://link.springer.com/article/10.1007/s10955-011-0157-3" target="_blank">
                    <button className="Link">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">J. Dunkel, J.A. Talbot, and E.-M. Schotz (2011),
                  <italic> Memory and obesity aﬀect the population dynamics of asexual freshwater planarians. </italic>
                  Physical Biology, PMID: 21263170. </td>
                  <td><form action="https://pubmed.ncbi.nlm.nih.gov/21263170/" target="_blank">
                    <button className="Link">PDF</button>
                  </form></td>
              </tr>
          </table>


          <h3 className = "Head2">Developmental Biology</h3>
          <table className = "container">
              <tr>
                  <td className = "sentences">B.G. Lambrus, O. Cochet-Escartin, P.A. Newmark , E.-M. S. Collins*, and J.J. Collins* (2015),
                  <italic> Tryptophan hydroxylase gene function is required for eye melanogenesis in the planarian Schmidtea mediterranea. </italic>
                   Plos ONE, PMID: 26017970. <br></br>(* corresponding author).</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4446096/pdf/pone.0127074.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">E.-M. Schotz, R.D. Burdine, F. Julicher, M.S. Steinberg, C.-P. Heisenberg, and R.A.Foty (2008),
                  <italic> Quantitative Diﬀerences in Tissue Surface Tension Inﬂuence Zebraﬁsh Germ Layer Positioning. </italic>
                  HFSP Journal, Vol.2 (1), pp. 1-56.</td>
                  <td><form action="https://www.tandfonline.com/doi/abs/10.2976/1.2834817#aHR0cHM6Ly93d3cudGFuZGZvbmxpbmUuY29tL2RvaS9wZGYvMTAuMjk3Ni8xLjI4MzQ4MTc/bmVlZEFjY2Vzcz10cnVlQEBAMA==" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">F. Ulrich*, M. Krieg*, E.-M. Schoetz*, V. Link, I. Castanon, V. Schnabel, A. Taubenberger, D. Mueller, P.-H. Puech, C.-P. Heisenberg.
                  <italic> Wnt11 Functions in Gastrulation by Controlling Cell Cohesion through Rab5c and E Cadherin, </italic>
                  Developmental Cell, Vol.9, 555564 (2005).<br></br>(* first author)</td>
                  <td><form action="https://reader.elsevier.com/reader/sd/pii/S1534580705003059?token=6DFC5D8DE8E74F2C62C16E22DD79DE9ED4239928927344EEF13FCCC01418699BCEB670D639C23F69299A9F7B796E21BB" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
          </table>


          <h3 className = "Head2">Methods and Techniques</h3>
          <table className = "container">
              <tr>
                  <td className = "sentences">R. Wang and E.-M. S. Collins (2020),
                  <italic> A novel bilateral grafting technique for studying patterning in Hydra. </italic>
                  Developmental Biology, PMID: 32165148.</td>
                  <td><form action="https://www.sciencedirect.com/science/article/abs/pii/S0012160620300889?via%3Dihub" target="_blank">
                    <button className="PDF">Link</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">T. Goel, R. Wang, S. Martin, <under>E. Lanphear</under>, and E.-M. S. Collins (2019),
                  <italic> Linalool acts as a fast and reversible anesthetic in Hydra. </italic>
                  Plos ONE, PMID: 31648269.</td>
                  <td><form action="https://europepmc.org/backend/ptpmcrender.fcgi?accid=PMC6812832&blobtype=pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><under>C. Tran, S. Fu, T. Rowe</under>, and E.-M. S. Collins (2017),
                  <italic> Generation and long-term maintenance of nerve-free Hydra vulgaris, </italic>
                  J. Vis. Exp.(125), e56115.</td>
                  <td><form action="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5609432/pdf/jove-125-56115.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><under>J.P. Dexter*, M.B. Tamme*, C.H. Lind*</under>, and E.-M. S. Collins (2014).
                  <italic> On-chip immobilization of planarians for in vivo imaging. </italic>
                  Nature Scientific Reports, DOI: 10.1038/srep06388.</td>
                  <td><form action="https://www.nature.com/articles/srep06388.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences"><under>M.A. Thomas</under> and E.-M. Schoetz (2011).
                  <italic> SAPling: A Scan-Add-Print barcoding database system to label and track asexual organisms. </italic>
                   Journal of Experimental Biology, PMID: 21993779.</td>
                  <td><form action="https://jeb.biologists.org/content/jexbio/214/21/3518.full.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">J.A. Talbot and E.-M. Schotz (2011),
                  <italic> Quantitative characterization of planarian wildtype behavior as a platform for screening locomotion phenotypes. </italic>
                  J Experimental Biology, PMID: 21389189.</td>
                  <td><form action="https://jeb.biologists.org/content/jexbio/214/7/1063.full.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
          </table>

          <h3 className = "Head2">Outreach and Education</h3>
          <table className = "container">
              <tr>
                  <td className = "sentences"><under>Vista SSEP Mission 11 Team</under>, D. Hagstrom, C. Bartee, and E.-M. S. Collins (2018),
                  <italic> Studying Planarian Regeneration Aboard the International Space Station within the Student Space Flight Experimental Program. </italic>
                  Frontiers in Astronomy and Space Sciences, doi.org/10.3389/fspas.2018.00012.</td>
                  <td><form action="https://www.frontiersin.org/articles/10.3389/fspas.2018.00012/full" target="_blank">
                    <button className="PDF">Link</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">E.-M. S. Collins and T.R. Calhoun (2014),
                  <italic> Raising the bar in freshman science education. Journal of College Science Teaching, </italic>
                  Vol. 43 (4), pp. 26-35.</td>
                  <td><form action="https://www.jstor.org/stable/pdf/43632009.pdf?refreqid=excelsior%3Adad43b007f80934cfec399758102bc74" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
              <tr>
                  <td className = "sentences">E.-M. Schoetz, S. Barolo, R.J. Full, O. Gigliotta, F. Grey, E.C. Guinan, J. Lee, A. Lindner, R. B. Lotto, D. Misevic, T. E. Murphy, J. Niemela, Z. Popovic, L. Riboli-Sasco, I. Riedel-Kruse, M.F. Schatz, T. Schaus, M.D. Shattuck, Ke. Showalter, K.O. Stanley, H.L. Swinney, L. Xu, and F. Taddei (2012).
                  <italic> Training the next generation of "night scientists" </italic>
                  (Workshop Summary), ICASE Newsletter_052012.</td>
                  <td><form action="https://www.archive.cri-paris.org/wp-content/uploads/Workshop-Summary-article_nightscience-July-2011.pdf" target="_blank">
                    <button className="PDF">PDF</button>
                  </form></td>
              </tr>
          </table>
      </div>
    );
}

export default Publications;
