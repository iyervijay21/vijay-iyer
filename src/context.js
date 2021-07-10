import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  handler = (action, newObject) => {
    switch (action) {
      case "ADD-PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "ADD-BLOG":
        this.setState({
          blogs: [newObject, ...this.state.blogs],
        });
        break;

      case "ADD-RECOMMENDATION":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;
    }
  };

  state = {
    handler: this.handler,

    projects: [
      {
        id: 1,
        title: "Project 1",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        excerpt: "This is my project about...",
        body: "Body1",
      },
      {
        id: 2,
        title: "Project 2",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
        excerpt: "This is my project about...",
        body: "Body2",
      },
      {
        id: 3,
        title: "Project 3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        excerpt: "This is my project about...",
        body: "Body3",
      },
      {
        id: 4,
        title: "Project 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        excerpt: "This is my project about...",
        body: "Body4",
      },
    ],

    blogs: [
      {
        id: 1,
        title: "Blogs 1",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        excerpt: "This is my Blog about...",
        body: "Body1",
      },
      {
        id: 2,
        title: "Blog 2",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-2.jpg",
        excerpt: "This is my Blog about...",
        body: "Body2",
      },
      {
        id: 3,
        title: "Blog 3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-3.jpg",
        excerpt: "This is my Blog about...",
        body: "Body3",
      },
      {
        id: 4,
        title: "Blogs 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/free-stock-image-1.jpg",
        excerpt: "This is my Blog about...",
        body: "Body4",
      },
    ],

    recommendations: [
      {
        id: 1,
        name: "Random guy 1",
        Company: "ABC company",
        Designation: "CEO",
        message: "He is a good engineer",
      },
      {
        id: 2,
        name: "Random guy 2",
        Company: "ABC company",
        Designation: "Director",
        message: "He is a lazy person",
      },
      {
        id: 3,
        name: "Random guy 3",
        Company: "ABC company",
        Designation: "Manager",
        message: "He is an excellent developer developer ",
      },
      {
        id: 4,
        name: "Random guy 4",
        Company: "ABC company",
        Designation: "SDE",
        message: "He gets things done so quickly",
      },
    ],

    skills: [
      {
        id: 1,
        name: "HTML5",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 5,
        name: "React",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/react.png",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 6,
        name: "MySQL",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 7,
        name: "Python",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/python.png",
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl:
          "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
        starsTotal: 3,
        starsActive: 1,
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
