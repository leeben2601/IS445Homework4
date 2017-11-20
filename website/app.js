const  candidates = [
    {name: 'Peter Parker', likes: 700},
    {name: 'Wade Winston Wilson', likes: 403},
    {name: 'Bruce Wayne', likes: 251},
    {name: 'Bruce Banner', likes: 218},
    {name: 'Tony Stark', likes: 135},
    {name: 'Diana Prince', likes: 133},
    {name: 'Clark Kent', likes: 122},
    {name: 'Steven Grant Rogers', likes: 117},
    {name: 'dash', likes: 0},
  ]
  //Display Candidates
  function printCandidates() {
      for (i=0; i<candidates.length; i++)
      {
            let element = document.createElement("div");
            document.getElementById("candidate").appendChild(element);
            element.id = candidates[i].name;
            let candidate_name = document.createElement("p");
            candidate_name.innerHTML = candidates[i].name;
            element.appendChild(candidate_name);
            let likesCount = document.createElement("p");
            likesCount.id=i;
            likesCount.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + candidates[i].likes;
            element.appendChild(likesCount);
            let delete_button = document.createElement("button");
            delete_button.innerHTML = "Delete";
            delete_button.className = i;
            delete_button.onclick = function(){ 
              deleteCandidate(this.className);
            };
            element.appendChild(delete_button);
            let like_button = document.createElement("button");
            like_button.innerHTML = "Like";
            like_button.className=i;
            like_button.onclick = function(){ 
              likeIncrement(this.className)
            };
            element.appendChild(like_button);
      }
  }
//Likes
  function likeIncrement(index)
  { 
      candidates[index].likes = candidates[index].likes + 1;
      document.getElementById(index).innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + candidates[index].likes;
  }
//Delete
  function deleteCandidate(index) {
    var parent = document.getElementById("candidate");
    let child = document.getElementById(candidates[index].name);
    parent.removeChild(child);
  }
//Add Candidates
    function addCandidate() {
      let new_name = document.getElementById("candidate_name").value ;
      if(new_name.length > 0) {
        candidates.push({name: new_name, likes: 0 })
            let element = document.createElement("div");
            element.id = new_name;
            document.getElementById("candidate").appendChild(element);
            let candidate_name = document.createElement("p");
            candidate_name.innerHTML = new_name;
            element.appendChild(candidate_name);
            let like_count = document.createElement("p");
            like_count.id=candidates.length - 1;
            like_count.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + 0;
            element.appendChild(like_count);
            let delete_button = document.createElement("button");
            delete_button.className = candidates.length - 1;
            delete_button.innerHTML = "Delete";
            delete_button.onclick = function () { deleteCandidate(this.className)};
            element.appendChild(delete_button);
            let like_button = document.createElement("button");
            like_button.innerHTML = "Like";
            like_button.className=candidates.length - 1;
            like_button.onclick = function(){ likeIncrement(this.className)};
            element.appendChild(like_button);
      }
    }