import React from 'react';
import './stylesheets/teaching.css'

const Teaching = () => {
    return (
       <div>
          <h1 className = "Header">Teaching</h1>
           <a className= "nameClass" href="https://www.swarthmore.edu/college-catalog/biology#BIOL_001" target="blank">BIOL 1. Cellular & Molecular Biology</a>
           <p className = "class_text">Team taught. An introduction to the study of living systems illustrated
           by examples drawn from cell biology, biochemistry, genetics, microbiology,
           neurobiology, and developmental biology.</p>
           <a className= "nameClass" href="http://catalog.swarthmore.edu/preview_course.php?catoid=7&coid=63503" target="blank">BIOL 027. Systems Biology</a>
           <p className = "class_text">Systems Biology is an innovative, cross-disciplinary approach that
           is rooted in the realization that it is difficult to understand biological
           systems from the study of individual components because living systems
           are more than the sum of their parts. Systems Biology aims to get at the big
           picture by using quantitative measurements of the properties and behaviors of
           interacting agents (molecules, cells, organisms, populations), bioinformatics,
           physics, and mathematical models, to capture and predict the dynamics of biological systems.</p>
           <a className= "nameClass" href="http://catalog.swarthmore.edu/content.php?catoid=7&catoid=7&navoid=191&filter%5Bitem_type%5D=3&filter%5Bonly_active%5D=1&filter%5B3%5D=1&filter%5Bcpage%5D=3" target="blank">BIOL 126. Biomechanics in Development and Regeneration</a>
           <p className = "class_text">Biomechanics investigates the interplay of mechanical forces and
           biological processes across scales, from nanomachines to whole organisms.
            This interplay is an important mechanism influencing key processes in
            embryonic development, disease, and regeneration of animals.  Research in
            biomechanics also serves as inspiration for bioengineering and regenerative
            medicine.  In this seminar, students will explore the primary literature
            in biomechanics through student-led discussions.  Focus areas may
            include development, regeneration, or animal behavior.</p>
           <a className= "nameClass" href="http://catalog.swarthmore.edu/preview_course.php?catoid=7&coid=72065" target="blank">BIOL 117. Trends in Pharmacology</a>
           <p className = "class_text">Pharmacology investigates the mechanisms of drug effects from the
           molecular level to the whole animal.  We will examine the mode of action
           of drugs, learn about drug design and development, xenobiotic metabolism
           and the cellular and organismal responses to drug exposure.  Students
           will explore the field of pharmacology through student-driven discussion
           of primary literature.  Topics will encompass landmark pharmacology
           papers as well as new approach methods. </p>
           <a className= "nameClass" href="http://catalog.swarthmore.edu/preview_course.php?catoid=7&coid=71942" target="blank">BIOL 129. Developmental Neurotoxicology</a>
           <p className = "class_text">In this seminar students will explore the field of developmental
           neurotoxicology, with an emphasis on alternative toxicology models and
           computational approaches.  The seminar will encompass student-driven
           discussion of primary literature, ranging from landmark toxicology
           papers to new approach methods.  Course content emphasizes statistical
           and quantitative methods. </p>
          <h1 className = "Header">Outreach</h1>
       </div>
    );
}

export default Teaching;
