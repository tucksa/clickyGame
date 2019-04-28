import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import pictureData from './pictures.json';
import Pictures from './components/Pictures';
import Wrapper from './components/Wrapper';



class App extends Component {

  state = {
    shuffledPics: pictureData,
    isClicked:[13],
    response:"",
    score:0,
    topScore:0
  };
  
  Clicked= id => {
    var pics= 
    [
      {
        "id":1,
        "src": "https://i.pinimg.com/originals/4d/03/1e/4d031e0f7b5a331412e2654b09b0a244.jpg",
        "name": "jackie burkhart" 
      },
      {
        "id": 2,
        "src": "https://usercontent2.hubstatic.com/13152575_f520.jpg",
        "name": "Steven Hyde"
      },
      {
        "id": 3,
        "src": "https://66.media.tumblr.com/5a6475e3ead509a5f3d02aeaa3f19d35/tumblr_pio2fmi6Z01tdxyhao7_250.png",
        "name": "Donna Pinciotti"
      },
      {
        "id": 4,
        "src": "https://memegenerator.net/img/images/16645115.jpg",
        "name": "Fez"
      },
      {
        "id": 5,
        "src": "https://cdn.playbuzz.com/cdn/UserImages/7da77efb-a5af-4aa9-bb85-1e81bef228ef.jpg",
        "name": "Kitty Forman"
      },
      {
        "id": 6,
        "src": "https://img.buzzfeed.com/buzzfeed-static/static/2015-05/5/11/campaign_images/webdr03/18-times-kitty-forman-was-the-sassiest-mom-on-the-2-4501-1430841490-17_dblbig.jpg",
        "name": "Kitty Forman"
      },
      {
        "id": 7,
        "src": "https://www.thedad.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-19-at-12.26.04-PM.png?w=640",
        "name": "Red Forman"
      },
      {
        "id": 8,
        "src": "https://i.pinimg.com/originals/57/6d/48/576d483cb679e8b1060406a135dc084b.jpg",
        "name": "Bob Pinciotti"
      },
      {
        "id": 9,
        "src": "https://pbs.twimg.com/profile_images/522207501656539138/qxEyHv5I_400x400.jpeg",
        "name": "Michael Kelso"
      },
      {
        "id": 10,
        "src": "https://vignette.wikia.nocookie.net/that70sshow/images/0/0c/Eric.jpg/revision/latest/top-crop/width/240/height/240?cb=20160617210320",
        "name": "Eric Forman"
      },
      {
        "id": 11,
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlf_Vq7XoNfUeqxyMvxDqcVXiQP88PqZShHUFnPl_RBJe7aiqa3A",
        "name": "Leo"
      },
      {
        "id": 12,
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bKoeerbxGywYAmf1S9NaaJYQPQZkduSczFxy69LRRlt0OQQ",
        "name": "Fez"
      }
    ];
    function randomInt(optArg= false) {
      let x
      if (optArg===false){
        x= pics.length
      }else{
        x = optArg
      }
      return Math.floor(Math.random()*x);
    } 
    let shuffled= [];
    for(let i = randomInt(); i<pics.length; i= randomInt()){
        shuffled.push(pics[i]);
        pics.splice(i,1)
    }
   
    for(let i=0; i<this.state.isClicked.length; i++){
      if(this.state.isClicked[i]=== id){
        var newTopScore;
        let newResponse = "wrong...";
        let clicked= [13];
        console.log(this.state.topScore)
        this.state.score> this.state.topScore? newTopScore = this.state.score: console.log("you suck")
        let newScore= 0;
        //console.log(newTopScore)
        this.setState({
          shuffledPics: shuffled,
          isClicked: clicked,
          score: newScore,
          topScore: newTopScore,
          response: newResponse
        })
        return console.log("you lost")
      }else{
        let clicked= this.state.isClicked.concat(id)
        let newScore= this.state.score+1;
        let newResponse = "correct!";
        this.setState({
          shuffledPics: shuffled,
          isClicked: clicked,
          score: newScore,
          response: newResponse
        })
      } 
    }
 
  }

  render(){
    return (
      <div>
          <Navbar style={{flex:1}}score= {this.state.score} topScore= {this.state.topScore} response= {this.state.response}/>
          <Jumbotron/>
          <Wrapper>
            {this.state.shuffledPics.map(picture => (
              <Pictures
                clicked= {this.Clicked}
                id = {picture.id}
                name= {picture.name}
                image= {picture.src}
              />
            ))}
          </Wrapper>
          <Footer/>
      </div>
    );
  } 
}

export default App;
