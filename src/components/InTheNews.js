import React from 'react';
import {useMediaQuery} from 'react-responsive'
import './stylesheets/inNews.css'
import NYTime from '../img/News/NYT.jpg'
import Cell from '../img/News/cell_press.jpg'
import How from '../img/News/how_stuff.jpg'
import Listen from '../img/News/listen.jpg'
import Plan from '../img/News/planaria.jpg'
import Sci_Daily from '../img/News/sci_daily.jpg'
import Slam from '../img/News/sci_slam.jpg'
import Smith from '../img/News/smith.jpg'
import Bull from '../img/News/swat_bull.jpg'
import Wash from '../img/News/wash_post.jpg'
import Tox from '../img/News/tox_sci.jpg'
import Grants from '../img/News/grants_ppl.jpg'

function InTheNews(){
    const isComputer = useMediaQuery({minWidth: 1224})
    return (
      <div>
      <h1 className = "Header">In the News</h1>

      <div className={isComputer ? "newsContainer" : "newsContainer-small"}>
        <p className = "newssent"><img className = "newspics" src={Bull} alt="Swarthmore Bulletin logo"/>
        <p className="date">[APR 2020]</p><h3 className = "newsTitle"><a href="https://bulletin.swarthmore.edu/spring-2020-issue-iii-volume-cxvii/honoring-ingenuity"
        className="newsTitle"> Honoring Ingenuity - Swarthmore College Bulletin</a></h3>
        <br></br>Highlights the five female faculty members at Swarthmore College in the sciences who recently received major federal grants, including Eva-Maria Collins.
        <br></br><p className={isComputer ? "quote" : "quote-small"}><italic>“Five female faculty members in the sciences recently received major federal grants, highlighting the ingenuity and passion for learning that courses through the College. Among them are Cacey Bester, assistant professor of physics, and Amy Graves, Walter Kemp Professor in the Natural Sciences and professor of physics — the newest and longest-serving members of the department, respectively. They will support the efforts of Bucknell University physicists Brian Utter and Katharina Vollmayr-Lee on a three-year, $600,000 grant from the National Science Foundation to study properties of granular materials. The project aligns Bester’s experimentalist approach with Graves’s computer simulations. Their Research in Undergraduate Institutions award will fund student ...”</italic></p></p>
        <hr></hr>

        <p className = "newssent"><img className = "newspics" src={Grants} alt="Grant receivers"/>
        <p className="date">[FEB 11, 2020]</p><h3 className = "newsTitle"><a href="https://www.swarthmore.edu/news-events/five-women-sciences-receive-major-federal-grants"
         className="newsTitle"> Five Women in the Sciences Receive Major Federal Grants</a></h3>
        <br></br>Three Swarthmore faculty earned a grant from the National Institutes of Health (NIH)
         Academic Research Enhancement Awards program. Eva-Maria Collins earned a grant from the National
         Institute of Environmental Health Sciences for a two-year study on the impact of pesticides on developing brains.
        </p>
        <hr></hr>

        <p className = "newssent"><img className = "newspics" src={Listen} alt="Play button"/>
        <p className="date">[JAN 13, 2020]</p><h3 className = "newsTitle"><a href="https://www.swarthmore.edu/news-events/listen-biologist-eva-maria-collins-real-life-hydra"
         className="newsTitle">Listen: Biologist Eva-Maria Collins on the Real-Life Hydra</a></h3>
        <br></br> In the fall, Associate Professor of Biology Eva-Maria Collins delivered “The Serpent’s Maw: A Physics Perspective on Mouth Function and the Dynamics of Hydra Regeneration,” a lecture in the physics colloquium series.
        </p>
        <hr></hr>

        <p className = "newssent"><img className = "newspics" src={Tox} alt="Toxicological Sciences Cover"/>
        <p className="date">[AUG 2019]</p><h3 className = "newsTitle"><a href="https://academic.oup.com/toxsci/pages/paper_of_the_year_award"
        className="newsTitle"> Board of Publications Toxicological Sciences Paper of the Year Award</a></h3>
        <br></br>The "Toxicological Sciences Paper of the year 2019” was awarded by the Society of Toxicology to the paper <br></br><br></br>
        <a className="paperLink" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6317421/pdf/kfy180.pdf"><bold>D. Hagstrom, L. Truong, S. Zhang, R. Tanguay, and E.-M. S. Collins.</bold> <br></br>Comparative Analysis of Zebrafish and Planarian Model Systems for Developmental Neurotoxicity Screens Using an 87-Compound Library.
        <span className="smaller"><italic> Toxicological Sciences</italic>, Volume 167, Issue 1, January 2019, Pages 15–25.</span></a><p className={isComputer ? "quote" : "quote-small"}><italic>“There are ongoing efforts to devise new screening models to predict toxicity and potentially prioritize chemicals that might influence development. Hagstrom and colleagues compared two models that utilized aquatic species to examine developmental neurotoxicity by compounds in a chemical library. An interesting aspect of these models is that they span a spectrum of events associated with development, allowing for breadth of analyses and the relatively short period of time to observe effects. Results from these analyses demonstrated that the models provided a high degree of predictability based on examination of known developmental neurotoxicants. This work illustrates the effective utility and potential future application of a model that can be used for screening large chemical libraries to mechanistically evaluate potential developmental neurotoxicants. This well-written manuscript has made a significant positive impact to the field of toxicology. The Board of Publications proudly confers the Paper of the Year Award to Dr. Collins and her research team.”</italic></p></p>
        <hr></hr>

        <p className = "newssent"><img className = "newspics" src={Slam} alt="Science Slam flyer"/>
        <p className="date">[JUL 11, 2019]</p><h3 className = "newsTitle"><a href="https://www.fulbright.de/projects-and-initiatives/fulbright-und-das-deutschlandjahr-usa/science-slam"
         className="newsTitle">Trilateral Science Slam in Tucson, AZ</a></h3>
        <br></br>Rui Wang won the third Trilateral Science Slam, in which 6 “slammers” from Germany, Russia and the USA participated.
        <br></br><p className={isComputer ? "quote" : "quote-small"}><italic>“And the winner is… Rui Wang! With her genuine fascination (which, by the way, carried over to the Saguaro cacti she saw in Tucson) and quirky, deadpan humor, Rui struck just the right balance between the fantastic and the scientific to win over the audience. It was a tight competition, as audience applause varied only slightly for each of the superbly done slams, but Rui nudged out the others with her brand of earnest, clearly articulated, no-nonsense science and her straight-faced, somewhat irreverent, at times morbid amusement, winning over a crowd half-composed of physicists, chemists, astronomers and Fulbright-Cottrell Scholars attending the Cottrell Scholar Conference at the resort. And in doing so secured a first American victory for this third trilateral science slam!”
        </italic></p>
        </p>
        <hr></hr>

        <p className = "newssent"><img className = "newspics" src={Plan} alt="Planarian"/>
        <p className="date">[SEP 25, 2017]</p><h3 className = "newsTitle"><a href="https://phys.org/news/2017-09-mechanism-asexual-reproduction-flatworms.html"
         className="newsTitle"> Researchers explain the mechanism of asexual reproduction in flatworms - Phys.org</a></h3>
        <br></br>Coverage of the PNAS article Malinowski et al.: "<a className="paperLink" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5642676/pdf/pnas.201700762.pdf">Mechanics dictate where and how freshwater planarians fission.</a>"
        <p className={isComputer ? "quote" : "quote-small"}><italic>“Freshwater planarians, found around the world and commonly known as "flatworms," are famous for their regenerative prowess. Through a process called "fission," planarians can reproduce asexually by simply tearing themselves into two pieces—a head and a tail—which then go on to form two new worms within about a week.
        When, where and how this process unfolds has remained a puzzle for centuries due to the difficulty of studying fission. But now, a team of University of California San Diego scientists provides a new biomechanical explanation in the Proceedings of the National Academy of Sciences (PNAS).
        Planarians are notoriously difficult to study. They do not like to be watched during fission, which primarily happens in the dark and halts at the slightest disturbance...”</italic></p></p>
        <hr></hr>

        <p className = "newssent"><img className = "newspics" src={Sci_Daily} alt="Science Daily logo"/>
        <p className="date">[SEP 25, 2017]</p><h3 className = "newsTitle"><a href="https://www.sciencedaily.com/releases/2017/09/170925151430.htm"
        className="newsTitle">Mechanism of asexual reproduction in flatworms - Science Daily</a></h3>
        <br></br>Coverage of the PNAS article Malinowski et al.: "<a className="paperLink" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5642676/pdf/pnas.201700762.pdf">Mechanics dictate where and how freshwater planarians fission.</a>"
        </p>
        <hr></hr>

        <p className = "newssent"><img className = "newspics" src={How} alt="HowStuffWorks title"/>
        <p className="date">[MAR 11, 2016]</p><h3 className = "newsTitle"><a href="https://animals.howstuffworks.com/animal-facts/gaze-the-disappearing-mouth-the-hydra.htm#:~:text=First%2C%20the%20Hydra%20reaches%20out,and%20stuns%20its%20uniocular%20prey.&text=Ah%2C%20the%20Hydra%20has%20an,mouth%20over%20the%20doomed%20creature"
        className="newsTitle">Gaze Into the Disappearing Mouth of the Hydra - HowStuffWorks</a></h3>
        <br></br>HowStuffWorks video covering the findings of the Biophysical Journal publication - Carter and Hyland et al.: "<a className="paperLink" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4788721/pdf/main.pdf">Dynamics of Mouth Opening in Hydra</a>".
        </p>
        <hr></hr>

        <p className = "newssent"><img className = "newspics" src={Smith} alt="Hydra"/>
        <p className="date">[MAR 10, 2016]</p><h3 className = "newsTitle"><a href="https://www.smithsonianmag.com/smart-news/how-hydra-rip-open-new-mouths-every-meal-180958372/#:~:text=Elements%20called%20%E2%80%9Cmyonemes%E2%80%9D%20in%20the,magnesium%20chloride%2C%20a%20muscle%20relaxer."
        className="newsTitle">How Hydra Rip Open New Mouths at Every Meal - Smithsonian Magazine</a></h3>
        <br></br>Coverage of the Biophysical Journal publication - Carter and Hyland et al.: "<a className="paperLink" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4788721/pdf/main.pdf">Dynamics of Mouth Opening in Hydra</a>".
        <p className={isComputer ? "quote" : "quote-small"}><italic>“Hydra are infamous for their ability to regenerate tissue after being torn apart. But one mystery about these tiny tentacled creatures that has dogged scientists was: How do Hydra open their mouths? Biologists have long known that Hydra do not have a permanent mouth, writes Rachel Feltman for The Washington Post. Each time the animal needs to feed, its skin cells separate to form an opening. Soon after ingesting its dinner, the proto-mouth closes back up...”</italic></p></p>
        <hr></hr>

        <p className = "newssent"><img className = "newspics" src={NYTime} alt="NYT logo"/>
        <p className="date">[MAR 9, 2016]</p><h3 className = "newsTitle"><a href="https://www.nytimes.com/2016/03/10/science/the-hydra-gets-a-new-mouth-with-every-meal.html"
        className="newsTitle">The Hydra Gets a New Mouth With Every Meal - The New York Times</a></h3>
        <br></br>Coverage of the Biophysical Journal publication - Carter and Hyland et al.: "<a className="paperLink" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4788721/pdf/main.pdf">Dynamics of Mouth Opening in Hydra</a>".
        <p className={isComputer ? "quote" : "quote-small"}><italic>“This week’s GIF science lesson might give you a newfound appreciation for how simple it is for most humans to consume a shrimp cocktail. No, this tiny aquatic creature is not that multi-headed sea beast of Greek mythology that regenerates a head every time some daring hero chops it off. It doesn’t even have a head. But like the mythical hydra, the real hydra does regenerate, which is why scientists have been studying it for decades. Over time, researchers have learned one fact creepy enough to fuel nightmares: Every time this pond-dweller wants to eat — for example a little brine shrimp — it rips a hole through the center of its body’s outer layer. When dinner is done, it closes back up...”</italic></p>
        </p>
        <hr></hr>

        <p className = "newssent"><img className = "newspics" src={Cell} alt="Cell Press Image"/>
        <p className="date">[MAR 8, 2016]</p><h3 className = "newsTitle"><a href="https://www.eurekalert.org/pub_releases/2016-03/cp-itm030216.php"
        className="newsTitle">Inside the Mouth of a Hydra - Cell Press</a></h3>
        <br></br>Coverage of the Biophysical Journal publication - Carter and Hyland et al.: "<a className="paperLink" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4788721/pdf/main.pdf">Dynamics of Mouth Opening in Hydra</a>".
        <p className={isComputer ? "quote" : "quote-small"}><italic>“Hydra is a genus of tiny freshwater animals that catch and sting prey using a ring of tentacles. But before a hydra can eat, it has to rip its own skin apart just to open its mouth. Scientists reporting March 8 in Biophysical Journal now illustrate the biomechanics of this process for the first time and find that a hydra's cells stretch to split apart in a dramatic deformation...”</italic></p>
        </p>
        <hr></hr>

        <p className = "newssent"><img className = "newspics" src={Wash} alt="Washington Post article"/>
        <p className="date">[MAR 8, 2016]</p><h3 className = "newsTitle"><a href="https://www.washingtonpost.com/news/speaking-of-science/wp/2016/03/08/heres-how-the-hydra-rips-its-own-body-open-to-eat-a-meal/"
        className="newsTitle"> Here’s how the hydra rips its own body open to eat a meal - Washington Post</a></h3>
        <br></br>Coverage of the Biophysical Journal publication - Carter and Hyland et al.: "<a className="paperLink" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4788721/pdf/main.pdf">Dynamics of Mouth Opening in Hydra</a>".

        </p>
        <hr></hr>

      </div>
      </div>
    );
}

export default InTheNews;
