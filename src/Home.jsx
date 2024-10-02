
import React from 'react';
import { Link } from 'react-router-dom';
import BrowserPreview from './partials/BrowserPreview';
import Slides from './partials/Slides';

const jsonData = [
  // {
  //     "perc": "100%",
  //     "words": "500",
  //     "strategy": "Complete rewriting with new grammar, all sentences and words changed.",
  //     "variations": "500,000+"
  // },
  // {
  //     "perc": "95%",
  //     "words": "475",
  //     "strategy": "Reordering and rewriting almost every sentence with many synonyms and combined ideas.",
  //     "variations": "400,000+"
  // },
  // {
  //     "perc": "90%",
  //     "words": "450",
  //     "strategy": "Major rewording, using alternative synonyms and sentence structures.",
  //     "variations": "350,000+"
  // },
  // {
  //     "perc": "85%",
  //     "words": "425",
  //     "strategy": "Moderate reordering and using different phrasing in most parts.",
  //     "variations": "300,000+"
  // },
  // {
  //     "perc": "80%",
  //     "words": "400",
  //     "strategy": "Changing sentence structure and using synonyms heavily for many words.",
  //     "variations": "250,000+"
  // },
  // {
  //     "perc": "75%",
  //     "words": "375",
  //     "strategy": "Considerable synonym usage and sentence rearrangement with grammar shifts.",
  //     "variations": "200,000+"
  // },
  // {
  //     "perc": "70%",
  //     "words": "350",
  //     "strategy": "Restructure sentences significantly, replacing key words and rearranging elements.",
  //     "variations": "150,000+"
  // },
  // {
  //     "perc": "65%",
  //     "words": "325",
  //     "strategy": "Sentence reordering and moderate synonym replacement.",
  //     "variations": "100,000+"
  // },
  // {
  //     "perc": "60%",
  //     "words": "300",
  //     "strategy": "Sentence reordering with some words replaced by synonyms.",
  //     "variations": "80,000+"
  // },
  // {
  //     "perc": "55%",
  //     "words": "275",
  //     "strategy": "Moderate restructuring of sentences and limited use of synonyms.",
  //     "variations": "70,000+"
  // },
  // {
  //     "perc": "50%",
  //     "words": "250",
  //     "strategy": "Half of the story changed with alternate phrasing and sentence shifts.",
  //     "variations": "60,000+"
  // },
  // {
  //     "perc": "45%",
  //     "words": "225",
  //     "strategy": "Some sentences combined, key phrases replaced by synonyms.",
  //     "variations": "50,000+"
  // },
  // {
  //     "perc": "40%",
  //     "words": "200",
  //     "strategy": "Some minor sentence structure changes and selective word replacements.",
  //     "variations": "40,000+"
  // },
  // {
  //     "perc": "35%",
  //     "words": "175",
  //     "strategy": "Sentence reordering without major rewrites, moderate synonym use.",
  //     "variations": "30,000+"
  // },
  {
      "perc": "30%",
      "words": "150",
      "strategy": "Limited reordering of phrases, selective word changes, combining short sentences.",
      "variations": "25,000+"
  },
  {
      "perc": "25%",
      "words": "125",
      "strategy": "Minor sentence restructuring, light use of synonyms in key sections.",
      "variations": "20,000+"
  },
  {
      "perc": "20%",
      "words": "100",
      "strategy": "Select key words replaced by synonyms, light sentence adjustments.",
      "variations": "15,000+"
  },
  {
      "perc": "15%",
      "words": "75",
      "strategy": "Few synonyms used, light reordering of some sentences.",
      "variations": "10,000+"
  },
  {
      "perc": "10%",
      "words": "50",
      "strategy": "Select few word changes, minor sentence restructuring.",
      "variations": "5,000+"
  },
  {
      "perc": "5%",
      "words": "25",
      "strategy": "Very minimal changes, slight grammar tweaks.",
      "variations": "2,000+"
  },
  {
      "perc": "1%",
      "words": "5",
      "strategy": "Barely any changes, small tweaks in word choice.",
      "variations": "1,000+"
  }
].sort((a,b) => a.words - b.words);


function Page() {
  const url = "/app"
  const TLD = "https://nonfungibledocs.com"
  return (<section>
    <div className="grid">
    <div>
      <hgroup>
        <h2><kbd>Improve your document safety</kbd></h2>
        <p>Create versions of docs so that leaks get <del>overlooked</del> <ins>detected</ins></p>
      </hgroup>
        
        <blockquote className='secondary'>
          <i>Unauthorized disclosures have clearly caused irreparable damage to our nation’s ability to protect itself</i>
          <footer>
            <cite>— former country head of intelligence</cite>
          </footer>
        </blockquote>
        
        <p><small>Create subtle variations of your doc or content. Paste any page of the leaked version to know who is responsible</small></p>

        <div>
          <div className="grid">
            <div>Create upto </div>
            <div><mark>10k</mark> recepients</div>
          </div>
          <hr />
          <div className="grid">
            <div>Pages supported </div>
            <div><mark>2 - 1000+</mark> pages</div>
          </div>
          <hr />
          <div className="grid">
            <div># of Pages to detect leak</div>
            <div><mark>1</mark> (500 words)</div>
          </div>
        </div>
        
      </div>
      {/* <div>
        <header style={{marginTop:"10vh"}}>&nbsp;</header>
        <main className='container'>Try it out by pasting some content =&gt;</main>
      </div> */}
      <div>
        <BrowserPreview tld={TLD} url={url}></BrowserPreview>    
      </div>
      
    </div>
    
    <p>&nbsp;</p>

    <div>
        <div className='container grid'>
          <div>
            <Slides data={jsonData}></Slides>
          </div>


           <div>
            <details>
              <summary>What do I do with the variations?</summary>
              <p>Once generated, please store the versions internally</p>
              <p>1 slightly edited version is generated per receipient</p>
            </details>
            <hr />
            <details>
              <summary><ins>Coming Soon</ins> paste to detect the leak</summary>
              <ul>
                <li><kbd>TODO:</kbd> Storing is a solved problem</li>
                <li><kbd>TODO:</kbd> Paste few lines to show nearest cosine distance </li>
              </ul>
            </details>
          </div>
          
          <div>
            <p>Built by <Link to="https://x.com/@bosky">@0xBosky</Link> using Gemini, React</p>
            
            <p>Scroll below for a talk or <Link to="https://youtu.be/CGAblZfXb5U">watch</Link></p>
          </div>
       

        </div>
    </div>
       
  </section>);
}

export default Page;
