import { useState } from 'react';

import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import { INSTALLGUIDE } from '../data.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Guide() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = (
        <div id="tab-content">
            <p>Please select a guide</p>
        </div>
    );

    if (selectedTopic) {
        const guide = INSTALLGUIDE[selectedTopic];
        tabContent = (
            <div id="tab-content">
                <h3>{guide.title}</h3>
                {guide.textOne && (
                    <p>{guide.textOne}</p>
                )}
                {guide.codeOne && (
                    <pre>
                        <SyntaxHighlighter language="lua" style={androidstudio}>{guide.codeOne}</SyntaxHighlighter>
                    </pre>
                )}
                {guide.textTwo && (
                    <p>{guide.textTwo}</p>
                )}
                {guide.codeTwo && (
                    <pre>
                        <SyntaxHighlighter language="lua" style={androidstudio}>{guide.codeTwo}</SyntaxHighlighter>
                    </pre>
                )}
                {guide.textThree && (
                    <p>{guide.textThree}</p>
                )}
                {guide.codeThree && (
                    <pre>
                        <SyntaxHighlighter language="lua" style={androidstudio}>{guide.codeThree}</SyntaxHighlighter>
                    </pre>
                )}
                {guide.textFour && (
                    <p>{guide.textFour}</p>
                )}
                {guide.codeFour && (
                    <pre>
                        <SyntaxHighlighter language="lua" style={androidstudio}>{guide.codeFour}</SyntaxHighlighter>
                    </pre>
                )}
                {guide.textFive && (
                    <p>{guide.textFive}</p>
                )}
                {guide.codeFive && (
                    <pre>
                        <SyntaxHighlighter language="lua" style={androidstudio}>{guide.codeFive}</SyntaxHighlighter>
                    </pre>
                )}
                {guide.textSix && (
                    <p>{guide.textSix}</p>
                )}
                {guide.codeSix && (
                    <pre>
                        <SyntaxHighlighter language="lua" style={androidstudio}>{guide.codeSix}</SyntaxHighlighter>
                    </pre>
                )}
                {guide.textSeven && (
                    <p>{guide.textSeven}</p>
                )}
                {guide.codeSeven && (
                    <pre>
                        <SyntaxHighlighter language="lua" style={androidstudio}>{guide.codeSeven}</SyntaxHighlighter>
                    </pre>
                )}
                {guide.textEight && (
                    <p>{guide.textEight}</p>
                )}
                {guide.codeEight && (
                    <pre>
                        <SyntaxHighlighter language="lua" style={androidstudio}>{guide.codeEight}</SyntaxHighlighter>
                    </pre>
                )}
                {guide.textNine && (
                    <p>{guide.textNine}</p>
                )}
                {guide.codeNine && (
                    <pre>
                        <SyntaxHighlighter language="lua" style={androidstudio}>{guide.codeNine}</SyntaxHighlighter>
                    </pre>
                )}
                {guide.textTen && (
                    <p>{guide.textTen}</p>
                )}
                {guide.codeTen && (
                    <pre>
                        <SyntaxHighlighter language="lua" style={androidstudio}>{guide.codeTen}</SyntaxHighlighter>
                    </pre>
                )}
            </div>
        );
    }

    return (
        <Section id="guide" title='QBCore Framework Install Guides'>{/* This is how you should do the chowhub buttons */}
            <Tabs buttons={
                <>
                    <TabButton isSelected={selectedTopic === 'bahama'} onClick={() => handleSelect('bahama')}>Bahama Mama</TabButton>
                    <TabButton isSelected={selectedTopic === 'beanmachine'} onClick={() => handleSelect('beanmachine')}>Bean Machine</TabButton>
                    <TabButton isSelected={selectedTopic === 'burgershot'} onClick={() => handleSelect('burgershot')}>Burgershot</TabButton>
                    <TabButton isSelected={selectedTopic === 'chowhub'} onClick={() => handleSelect('chowhub')}>Chowhub</TabButton>
                    <TabButton isSelected={selectedTopic === 'hornys'} onClick={() => handleSelect('hornys')}>Hornys</TabButton>
                    <TabButton isSelected={selectedTopic === 'koi'} onClick={() => handleSelect('koi')}>Koi</TabButton>
                    <TabButton isSelected={selectedTopic === 'pearls'} onClick={() => handleSelect('pearls')}>Pearls</TabButton>
                    <TabButton isSelected={selectedTopic === 'pizzathis'} onClick={() => handleSelect('pizzathis')}>Pizza This</TabButton>
                    <TabButton isSelected={selectedTopic === 'upnatom'} onClick={() => handleSelect('upnatom')}>Up N Atom</TabButton>
                    <TabButton isSelected={selectedTopic === 'uwu'} onClick={() => handleSelect('uwu')}>Uwu Cafe</TabButton>
                    <TabButton isSelected={selectedTopic === 'cluckin'} onClick={() => handleSelect('cluckin')}>Cluckin Bell</TabButton>
                </>}>
                {tabContent}
            </Tabs>
        </Section>
    );
}