import React from 'react';
import './stylesheets/teaching.css'

const Teaching = () => {
    return (
      <div>
      <h1 className = "Header">Teaching</h1>
      <table className = "classPreq">
          <tr>
              <td><a className= "nameClass" href="https://www.swarthmore.edu/college-catalog/biology#BIOL_001" target="blank">BIOL 1. Cellular & Molecular Biology</a></td>
          </tr>
          <tr>
              <td className = "class_text">Team taught. An introduction to the study of living systems illustrated
              by examples drawn from cell biology, biochemistry, genetics, microbiology,
              neurobiology, and developmental biology.</td>
              <td className = "prereq"><b>Prerequisites</b><br></br>No prerquisites</td>
          </tr>

          <tr>
              <td><a className= "nameClass" href="http://catalog.swarthmore.edu/preview_course.php?catoid=7&coid=63503" target="blank">BIOL 027. Systems Biology</a></td>
          </tr>
          <tr>
              <td className = "class_text">Systems Biology is an innovative, cross-disciplinary approach that
              is rooted in the realization that it is difficult to understand biological
              systems from the study of individual components because living systems
              are more than the sum of their parts. Systems Biology aims to get at the big
              picture by using quantitative measurements of the properties and behaviors of
              interacting agents (molecules, cells, organisms, populations), bioinformatics,
              physics, and mathematical models, to capture and predict the dynamics of biological systems.
              </td>
              <td className = "prereq"><b>Prerequisites</b><br></br>BIOL 001 and BIOL 002; or permission of instructor</td>
          </tr>

          <tr>
              <td><a className= "nameClass" href="http://catalog.swarthmore.edu/content.php?filter%5B27%5D=-1&filter%5B29%5D=&filter%5Bcourse_type%5D=-1&filter%5Bkeyword%5D=biomechanics&filter%5B32%5D=1&filter%5Bcpage%5D=1&cur_cat_oid=7&expand=&navoid=191&search_database=Filter&filter%5Bexact_match%5D=1#acalog_template_course_filter" target="blank">BIOL 126. Biomechanics in Development and Regeneration</a></td>
          </tr>
          <tr>
              <td className = "class_text">Biomechanics investigates the interplay of mechanical forces and
              biological processes across scales, from nanomachines to whole organisms.
               This interplay is an important mechanism influencing key processes in
               embryonic development, disease, and regeneration of animals.  Research in
               biomechanics also serves as inspiration for bioengineering and regenerative
               medicine.  In this seminar, students will explore the primary literature
               in biomechanics through student-led discussions.  Focus areas may
               include development, regeneration, or animal behavior.
              </td>
              <td className = "prereq"><b>Prerequisites</b><br></br>BIOL 027 or with permission of instructor</td>
          </tr>

          <tr>
              <td><a className= "nameClass" href="http://catalog.swarthmore.edu/preview_course.php?catoid=7&coid=72065" target="blank">BIOL 117. Trends in Pharmacology</a></td>
          </tr>
          <tr>
              <td className = "class_text">Pharmacology investigates the mechanisms of drug effects from the
              molecular level to the whole animal.  We will examine the mode of action
              of drugs, learn about drug design and development, xenobiotic metabolism
              and the cellular and organismal responses to drug exposure.  Students
              will explore the field of pharmacology through student-driven discussion
              of primary literature.  Topics will encompass landmark pharmacology
              papers as well as new approach methods.
              </td>
              <td className = "prereq"><b>Prerequisites</b><br></br>STAT 011, CHEM 010, and one of the following:<br></br>CHEM 038, BIOL 014, BIOL 020, BIOL 022, BIOL 027, or with permission of instructor</td>
          </tr>

          <tr>
              <td><a className= "nameClass" href="http://catalog.swarthmore.edu/preview_course.php?catoid=7&coid=71942" target="blank">BIOL 129. Developmental Neurotoxicology</a></td>
          </tr>
          <tr>
              <td className = "class_text">In this seminar students will explore the field of developmental
              neurotoxicology, with an emphasis on alternative toxicology models and
              computational approaches.  The seminar will encompass student-driven
              discussion of primary literature, ranging from landmark toxicology
              papers to new approach methods.  Course content emphasizes statistical
              and quantitative methods
              </td>
              <td className = "prereq"><b>Prerequisites</b><br></br>At least one of:  BIOL 027, BIOL 022, BIOL 029, or with permission of instructor.<br></br>Recommended:  STAT 021</td>
          </tr>
      </table>
      </div>
    );
}

export default Teaching;
