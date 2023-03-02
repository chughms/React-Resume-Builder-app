import React, { Component } from 'react'
import Header from './Components/Header'
import './App.css'
import ProfileForm from './Components/ProfileForm'
import { EducationForm } from './Components/EducationForm'
import ExperienceForm from './Components/ExperienceForm'
import ProjectsForm from './Components/ProjectsForm'
import Footer from './Components/Footer'
import AddButton from './Components/AddButton'
import CVPreview from './Components/CVPreview'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
      profile: {
        fullName: "",
        tagline: "",
        phone: "",
        email: "",
        linkedin: "",
        portfolio: "",
        skills: ""
      },
      education: {
        institution: "",
        major: "",
        startDate: "",
        endDate: "",
        awards: "",
        gpa: ""
      },
      employmentCount: 1,
      employment: [{
        id: 0,
        company: "",
        city: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: ""
      }],
      projectCount: 1,
      projects: [{
        id: 0,
        title: "",
        tech: "",
        description: "",
        startDate: "",
        endDate: ""
      }]
    }
  }

  togglePageMode = () => {
    this.setState(prevState => ({
      editMode: !prevState.editMode
    }))
  }

  handleChangeProfile = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const profileInfo = this.state.profile;

    profileInfo[inputName] = inputValue;

    this.setState({
      profile: profileInfo
    });

    console.log(this.state.profile);
  }

  handleChangeEducation = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const educationInfo = this.state.education;

    educationInfo[inputName] = inputValue

    this.setState({
      education: educationInfo
    });

    console.log(this.state.education);
  }

  handleChangeEmployment = (e, index) => {
    const employmentArray = this.state.employment;
    const inputName = e.target.name;
    const inputValue = e.target.value;

    employmentArray[index][inputName] = inputValue;
    this.setState({
      employment: employmentArray
    });

    console.log(this.state.employment);
  }

  handleChangeProject = (e, index) => {
    const projectArray = this.state.projects;
    const inputName = e.target.name;
    const inputValue = e.target.value;

    projectArray[index][inputName] = inputValue;
    this.setState({
      projects: projectArray
    });

    console.log(`${e.target.name}: ${e.target.value}`);
  }

  addEmployment = () => {
    this.setState({
      employmentCount: this.state.employment.length,
      employment: [...this.state.employment, {
        id: this.state.employment.length,
        company: "",
        city: "",
        position: "",
        tasks: "",
        startDate: "",
        endDate: ""
      }],
    })
    console.log(this.state.employment);
    console.log(this.state.employmentCount);
  }

  addProject = () => {
    this.setState({
      projectCount: this.state.projects.length,
      projects: [...this.state.projects, {
        id: this.state.projects.length,
        title: "",
        tech: "",
        description: "",
        startDate: "",
        endDate: ""
      }]
    })
    console.log(this.state.projects);
    console.log(this.state.projectCount);
  }

  deleteEmployment = (id) => {
    this.setState ({
      employment: this.state.employment.filter((element) => element.id !== id)
    });
  }
  
  deleteProject = (id) => {
    this.setState ({
      projects: this.state.projects.filter((element) => element.id !== id)
    });
  }

  render() {
    const { editMode, profile, education, employmentCount, employment, projectCount, projects } = this.state;
    return (
      <div className="app__main">
        <Header mode={editMode} toggleMode={this.togglePageMode} />
        { editMode ? 
          <>
            <ProfileForm 
              fullName={profile.fullName}
              tagline={profile.tagline}
              phone={profile.phone}
              email={profile.email}
              linkedin={profile.linkedin}
              portfolio={profile.portfolio}
              skills={profile.skills}
              handleChange={this.handleChangeProfile}
            />
            <EducationForm 
              institution={education.institution}
              major={education.major}
              startDate={education.startDate}
              endDate={education.endDate}
              awards={education.awards}
              gpa={education.gpa}
              handleChange={this.handleChangeEducation}
            />
            <div className="experience-project-form-section">
              <div>
                <h3>Work Experience</h3>
                {employment.map((element, index) => {
                  return (
                    <ExperienceForm 
                      key={element.id}
                      id={element.id}
                      company={element.company}
                      city={element.city}
                      position={element.position}
                      tasks={element.tasks}
                      startDate={element.startDate}
                      endDate={element.endDate}
                      handleDelete={this.deleteEmployment}
                      handleChange={(e) => this.handleChangeEmployment(e, index)}
                    />
                  )
                })}
                <AddButton onClick={this.addEmployment} />
              </div>
              <div>
                <h3>Personal Projects</h3>
                {projects.map((element, index) => {
                  return (
                    <ProjectsForm 
                      key={element.id}
                      id={element.id}
                      title={element.title}
                      tech={element.tech}
                      description={element.description}
                      startDate={element.startDate}
                      endDate={element.endDate}
                      handleDelete={this.deleteProject}
                      handleChange={(e) => this.handleChangeProject(e, index)}
                    />
                  )
                })}
                <AddButton onClick={this.addProject}/>
              </div>
            </div> 
          </> : 
          <CVPreview 
            profile={profile}
            education={education}
            employment={employment}
            projects={projects}
          /> }
        <Footer />
      </div>
    )
  }
}

export default App