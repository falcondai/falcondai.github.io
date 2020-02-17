import React from "react"
import { graphql } from "gatsby"
import { Styled, css } from "theme-ui"
import Img from "gatsby-image"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"

// Static files
// CV
import cvPdf from '../assets/docs/cv-web.pdf'
// Posters
import mehcPoster from '../assets/docs/poster-mehc.pdf'
import stegaPoster from '../assets/docs/poster-steganographic-text.pdf'
import glyphPoster from '../assets/docs/poster-glyph.pdf'
// Images
import brainPrintImg from '../assets/images/3d-printed-brain.jpg'

const AboutLink = ({ to, linkText, ...props }) => (
  <Styled.a
    href={to}
    css={css({
      color: `secondary`,
      ml: 1,
    })}
    {...props}
  >
    [{linkText}]
  </Styled.a>
)

// The about index page
export default ({
  data: {
    site: {
      siteMetadata: {
        title,
      },
    },
    profileImage: {
      childImageSharp: {
        fluid,
      },
    },
  },
  location,
}) => (
  <Layout title={title}>
    <SEO
      location={location.href}
      previewImage={fluid.src}
      description="I like to explore and create. I spend most of my time studying how to realize artificial intelligence in physical and virtual environments."
      keywords={['artificial intelligence', 'reinforcement learning', 'natural language processing', 'blog']}
    />

    <Img
      fluid={fluid}
      alt="Falcon Dai standing next to a Baxter robot"
    />

    <section id="about">
      <Styled.p
        css={css({
          fontSize: 2,
        })}
      >
        I like to explore and create. I spend most of my time studying how to realize artificial intelligence in physical and virtual environments. I graduated from the University of Chicago with B.S. in mathematics and B.A. in physics (both with honors). I am currently a PhD candidate at TTI-Chicago focusing on reinforcement learning (sequential decision making in an unknown environment). Professor Matthew Walter is my advisor.
        <AboutLink to={cvPdf} linkText="my CV" />
      </Styled.p>
    </section>

    <section id="interests">
      <Styled.h2>Research interests</Styled.h2>
      <Styled.ul>
        <li>
          Foundation of reinforcement learning (optimism, regret, safety)
          <AboutLink to="#p-mehc" linkText="2019b" />
          <AboutLink to="#p-loop" linkText="2019c" />
        </li>
        <li>
          Meaning and interpretation (semiotics, semantics, metaphors)
          <AboutLink to="#p-w2v" linkText="2019e" />
        </li>
        <li>
          Social implications of machine learning technologies (algorithmic safeguards, human-centric objectives)
          <AboutLink to="#p-stega" linkText="2019a" />
        </li>
        <li>
          3D computer vision (surface normals, geometric landmarks)
          <AboutLink to="#p-diode" linkText="2019d" />
          <AboutLink to="#p-electrode" linkText="2016a" />
        </li>
        <li>
          Language modeling (Chinese, glyph, summarization)
          <AboutLink to="#p-stega" linkText="2019a" />
          <AboutLink to="#p-plan" linkText="2018" />
          <AboutLink to="#p-glyph" linkText="2017" />
        </li>
      </Styled.ul>
    </section>

    <section id="publications">
      <Styled.h2>Publications</Styled.h2>
      <Styled.ul>
        <li id="p-mehc">
          -, Walter MR. <em>Maximum Expected Hitting Cost of a Markov Decision Process and Informativeness of Rewards.</em> Neural Information Processing Systems (NeurIPS), 2019.
          <AboutLink to="https://arxiv.org/abs/1907.02114" linkText="paper" />
          <AboutLink to={mehcPoster} linkText="poster" />
        </li>
        <li id="p-stega">
          -, Cai Z. <em>Towards Near-imperceptible Steganographic Text.</em> Association for Computational Linguistics (ACL), 2019.
          <AboutLink to="https://arxiv.org/abs/1907.06679" linkText="paper" />
          <AboutLink to="http://www.livecongress.it/aol/indexSA.php?id=8CB5CB4E&ticket=" linkText="talk" />
          <AboutLink to={stegaPoster} linkText="poster" />
          <AboutLink to="https://github.com/falcondai/lm-steganography" linkText="code" />
          <AboutLink to="http://www.acl2019.org/EN/nominations-for-acl-2019-best-paper-awards.xhtml" linkText="nominated for best paper awards" />
        </li>
        <li id="p-plan">
          Gehrmann S, -, Elder H, Rush AM. <em>End-to-End Content and Plan Selection for Natural Language Generation.</em> International Conference on Natural Language Generation (INLG), 2018.
          <AboutLink to="https://arxiv.org/abs/1810.04700" linkText="paper" />
          <AboutLink to="https://github.com/sebastianGehrmann/diverse_ensembling" linkText="code" />
        </li>
        <li id="p-glyph">
          -*, Cai Z*. <em>Glyph-aware Embedding of Chinese Characters.</em> Subword and Character level models in NLP workshop at Empirical Methods in Natural Language Processing conference (EMNLP), 2017.
          <AboutLink to="https://arxiv.org/abs/1709.00028" linkText="paper" />
          <AboutLink to={glyphPoster} linkText="poster" />
          <AboutLink to="https://github.com/falcondai/chinese-char-lm" linkText="code" />
        </li>
        <li>
          Towle VL, -, Zheng W, Issa N. <em>“Mapping Cortical Function with Event-Related Electrocorticography”</em> in <em>Functional Mapping of the Cerebral Cortex</em>, ed. Richard W. Byrne. (Springer, 2016), 91-104.
          <AboutLink to="https://link.springer.com/chapter/10.1007/978-3-319-23383-3_6" linkText="chapter" />
          <AboutLink to="https://link.springer.com/book/10.1007/978-3-319-23383-3" linkText="book" />
        </li>
        <li id="p-electrode">
          Brang D, -, Zhang W, Towle VL. <em>Registering Imaged ECoG Electrodes to Human Cortex: A Geometry-based Technique.</em> Journal of neuroscience methods, 64-73. 2016.
          <AboutLink to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5075506/" linkText="paper" />
          <AboutLink to="https://github.com/towle-lab/electrode-registration-app" linkText="software" />
        </li>
        <li>
          Brang D, Towle VL, Suzuki S, Hillyard SA, Di Tusa S, -, Wu S, Tao J, Grabowecky M. <em>Peripheral sounds rapidly activate visual cortex: evidence from electrocorticography.</em> Journal of Neurophysiology, 3023-3028. 2015.
          <AboutLink to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4737427/" linkText="paper" />
        </li>
        <li>
          Towle VL, Minama Reddy GK, -, Zhang W, Brang D, Hunter S, Kohrman MH, Marcucilli CJ, Tao J, Rossi MA, Frim DM, Byrne RW. <em>Chasing Language Through the Brain: Three Successive Parallel Networks.</em> Society for the Neurobiology of
          Language Conference, 2014.
        </li>
      </Styled.ul>
    </section>

    <section id="working-papers">
      <Styled.h2>Working papers</Styled.h2>
      <Styled.ul>
        <li id="p-w2v">
          -. <em>Word2vec Conjecture and A Limitative Result.</em> In submission, 2019.
          <AboutLink href="mailto:hello@falcond.ai?subject=Manuscript request" linkText="manuscript available upon request" />
        </li>
        <li id="p-loop">
          -, Walter MR. <em>Loop Estimator for Discounted Values in Markov Reward Processes.</em> In submission, 2019.
          <AboutLink href="mailto:hello@falcond.ai?subject=Manuscript request" linkText="manuscript available upon request" />
        </li>
        <li id="p-diode">
          Vasiljevic I, Kolkin N, Zhang S, Luo R, Wang H, -, Daniele AF, Mostajabi M, Basart S, Walter MR, Shakhnarovich G. <em>DIODE: A Dense Indoor and Outdoor DEpth Dataset.</em> In submission, 2019.
          <AboutLink to="https://arxiv.org/abs/1908.00463" linkText="preprint" />
          <AboutLink to="https://diode-dataset.org/" linkText="website" />
        </li>
      </Styled.ul>
    </section>

    <section id="presentations">
      <Styled.h2>Selected presentations</Styled.h2>
      <Styled.ul>
        <li>
          -, Walter MR. <em>Loop Estimator for Discounted Values in Markov Reward Processes</em>. Poster session at Algorithmic Learning Theory (ALT), 2020.
        </li>
        <li>
          -, Walter MR. <em>Finite Time Analysis of Potential-based Reward Shaping</em>. Reinforcement Learning and Decision Making (RLDM), 2019. [Student travel fellowship]
        </li>
        <li>
          Vasiljevic I, Kolkin N, Luo R, Wang H, -, Daniele AF, Mostajabi M, Basart S, Walter MR, Shakhnarovich G. <em>DIODE: A Dense Indoor and Outdoor DEpth Dataset</em>. 3D Scene Understanding for Vision, Graphics, and Robotics workshop at Computer Vision and Pattern Recognition (CVPR), 2019.
        </li>
        <li>
          -, Cai Z. <em>Towards Near-imperceptible Steganographic Text</em>. Midwest Machine Learning Symposium (MMLS), 2019.
        </li>
        <li>
          - and others at RIPL @ TTIC. Rubik’s cube solving robot. National robotics week special exhibit at the Museum of Science and Industry, 2019.
        </li>
        <li>
          -, Walter MR. <em>Reward-adjusted Diameters and Their Conditioning by Potential-based Reward Shaping</em>. Learning by Instruction workshop at Neural Information Processing Systems (NeurIPS), 2018.
        </li>
        <li>
          - and others at RIPL @ TTIC. Checkers-playing robot. National robotics week special exhibit at the Museum of Science and Industry, 2018.
        </li>
        <li>
          Schaff C*, -*, Walter MR. <em>Towards Active Imitation Learning</em>. Learning from Demonstrations in High-Dimensional Feature Spaces workshop at Robotics: Science and Systems conference (RSS), 2017. [Student travel grant award]
        </li>
        <li>
          -, Walter MR. <em>Notepad-Augmented Environments in Reinforcement Learning</em>. Midwest Robotics workshop, 2017.
        </li>
        <li>
          -, Cai Z. <em>Glyph-based Visual Chinese Character Embedding</em>. Midwest Speech and Language Days (MSLD), 2017.
        </li>
        <li>
          -, Nettsheim G. <em>Simulation and Modeling of the Anode of the Proposed Large-Area Picosecond Photo-Detector</em>. Chicago Area Undergraduate Research Symposium, 2011.
        </li>
      </Styled.ul>
    </section>

    <section id="past">
      <Styled.h2>Past works</Styled.h2>
      <Styled.ul>
        <li>Electrocochleography (ECoG) electrode MR-CT registration: <Styled.a href="https://github.com/towle-lab/electrode-registration-app">software</Styled.a>.</li>
        <li>TwiThinks, a Twitter data analytics project that studies and visualizes Twitter data. Our realtime <Styled.a href="https://twitter.com/search?q=(obama%20OR%20romney)%20(%23ivoted)%20until%3A2012-12-31%20since%3A2012-11-01&src=typed_query">#ivoted</Styled.a> (for Obama vs Romney) scoreboard received 20K+ hits on Election Day 2012. It was <Styled.a href="https://www.csail.mit.edu/news/computer-science-students-look-twitter-clues-election">featured</Styled.a> on MIT-CSAIL news.</li>
        <li>Once ranked 164th on <Styled.a href="https://www.kaggle.com/falcon">Kaggle</Styled.a>.</li>
        <li><Styled.a href="https://chrome.google.com/webstore/detail/wikipedia-plus/fkfdafnifmdahipdpcbpefhjlceippna">Wikipedia Plus</Styled.a>, a Chrome extension that enhances Wikipedia's user experience.</li>
        <li>3D printing my MRI-scanned brain (reconstructed via Freesurfer): <Styled.a href={brainPrintImg}>photo</Styled.a> and <Styled.a href="https://www.thingiverse.com/thing:262832">mesh</Styled.a>.</li>
        <li>My pre-2015 blog <Styled.a href="https://blog.falcondai.com">Substance</Styled.a>.</li>
        <li><Styled.a href="/demo-focus.html">Focus</Styled.a>, simulating focus+depth visual effect with CSS 3D transform and CSS filter.</li>
        <li><Styled.a href="https://play.google.com/store/apps/details?id=com.falcondai.android.release.volumebutton">Volume Button</Styled.a>, a 5-star Android app that replaces broken volume buttons by touch controls in the status bar accessible anywhere.</li>
      </Styled.ul>
    </section>

    <section id="contact">
      <Styled.h2>Contact</Styled.h2>
      <Styled.ul>
        <li>twitter <Styled.a href="https://twitter.com/falcondai">@falcondai</Styled.a></li>
        <li>email <Styled.a href="mailto:hello@falcond.ai">hello@falcond.ai</Styled.a></li>
      </Styled.ul>
    </section>

    <section id="profile">
      <Styled.h2>Elsewhere on the web</Styled.h2>
      <Styled.ul>
        <li><Styled.a href="https://scholar.google.com/citations?user=fm0h6EkAAAAJ&hl=en">Google Scholar</Styled.a></li>
        <li><Styled.a href="https://github.com/falcondai">GitHub</Styled.a></li>
        <li><Styled.a href="https://stackoverflow.com/users/1121123/falcon">Stack Overflow</Styled.a></li>
      </Styled.ul>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    profileImage: file(relativePath: { eq: "images/profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 672) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
