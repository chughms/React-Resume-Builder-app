import React, { Component } from 'react'
import CVExperience from './CVExperience'
import CVProject from './CVProject'
import CVEducation from './CVEducation'
import '../Styles/CVPreview.css'

export class CVPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { profile, education, employment, projects } = this.props;

        return (
            <div className="cv-preview__main">
                <div className="cv-preview__container">
                    <div className="cv-preview__profile">
                        <h1>{profile.fullName}</h1>
                        <div className="cv-preview__contact">
                            <p><span>Phone: </span>{profile.phone}</p>
                            <p><span>Email: </span>{profile.email}</p>
                            <p><span>Linkedin: </span>{profile.linkedin}</p>
                            <p><span>Portfolio: </span>{profile.portfolio}</p>
                        </div>
                    </div>
                    <div className="cv-preview__skills-container">
                        <h3>Skills</h3>
                        <hr />
                        <p><span>Skills: </span>{profile.skills}</p>
                    </div>
                    <div className="cv-preview__education-container">
                        <h3>Education</h3>
                        <hr />
                        <div className="cv-preview__education">
                            <CVEducation 
                                institution={education.institution}
                                major={education.major}
                                startDate={education.startDate}
                                endDate={education.endDate}
                                awards={education.awards}
                                gpa={education.gpa}
                            />
                        </div>
                    </div>
                    <div className="cv-preview__experience-container">
                        <h3>Work Experience</h3>
                        <hr />
                        <div className="cv-preview__experiences">
                            {employment.map((element) => {
                                return (
                                    <CVExperience 
                                        key={element.id}
                                        company={element.company}
                                        city={element.city}
                                        position={element.position}
                                        tasks={element.tasks}
                                        startDate={element.startDate}
                                        endDate={element.endDate}
                                    />
                                )
                            })}
                        </div>
                    </div>
                    <div className="cv-preview__project-container">
                        <h3>Personal Projects</h3>
                        <hr />
                        <div className="cv-preview__projects">
                            {projects.map((element) => {
                                return (
                                    <CVProject 
                                        key={element.id}
                                        title={element.title}
                                        tech={element.tech}
                                        description={element.description}
                                        startDate={element.startDate}
                                        endDate={element.endDate}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CVPreview