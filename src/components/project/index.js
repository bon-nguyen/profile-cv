import React, { useRef,useState, useEffect } from 'react';
import Section from '../section';
import {FaWifi} from 'react-icons/fa';                  
import {ProjectBtnWrap, ProjectWatching, ProjectButton, ProjectContentFooter,ProjectContainer, ProjectSection, ProjectWrap, ProjectList, ProjectInner, ProjectItem, ProjectImg, ProjectContent, ProjectTitle,ProjectContentTop, ProjectTechnology  } from './Project';
import Tooltip from '../tooltip';
import {listProject} from './DataProject';
import { Button } from '../button/buttonEl';


const Project = ()=> {
    const [postsToShow, setPostsToShow] = useState([]);
    const postsPerPage = 3;
    let arrayForHoldingPosts = [];
    const ref = useRef(postsPerPage);
    const totalPost = listProject.length;

    const loopWithSlice = (start, end) => {
        const slicedPosts = listProject.slice(start, end)
        arrayForHoldingPosts = slicedPosts;
        setPostsToShow(arrayForHoldingPosts)
    }
    useEffect(() => {
        loopWithSlice(0, postsPerPage)
    }, []);


    const handleShowMorePosts = () => {
        loopWithSlice(0, ref.current + postsPerPage);
        if(ref.current >= totalPost){
            ref.current = totalPost;
        }else{
            ref.current += postsPerPage;
        }
        console.log("post", totalPost);
        console.log( 'red',ref);

    }

    return (
        <ProjectSection>
            <ProjectContainer>
                <Section>
                    <span>Pro</span>ject
                </Section>
                <ProjectWrap>
                    <ProjectList>
                        {postsToShow.map((product) => (
                            <ProjectItem key={product.id}>
                                <ProjectInner>
                                    <ProjectImg src={product.image} alt={product.src} />
                                </ProjectInner>
                                <ProjectContent>
                                    <ProjectContentTop>
                                        <ProjectTitle>{product.name}</ProjectTitle>
                                        <ProjectTechnology>
                                            <ul>
                                                {product.technology.map((teach, idx) => (
                                                    <li key={idx}>{teach}</li>
                                                ))}
                                            </ul>
                                        </ProjectTechnology>
                                    </ProjectContentTop>
                                    <ProjectContentFooter>
                                        <Tooltip content={product.tooltipContent}  direction={product.tooltipDirection}>
                                            <ProjectButton>
                                                <FaWifi />
                                                <span>{product.btn}</span>
                                            </ProjectButton>
                                        </Tooltip>
                                        <ProjectWatching>
                                            watching
                                        </ProjectWatching>
                                    </ProjectContentFooter>
                                </ProjectContent>
                            </ProjectItem>
                        ))}
                    </ProjectList>
                    <ProjectBtnWrap>
                        <Button
                            onClick={handleShowMorePosts}
                            disabled={ref.current >= totalPost}
                            primary
                        >
                            LoadMore
                        </Button>
                    </ProjectBtnWrap>
                </ProjectWrap>
            </ProjectContainer>
        </ProjectSection>
    );
};

export default Project;