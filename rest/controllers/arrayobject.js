const arrayobject = {
  chuck: (req, res) => {
    try {
      const { arr, index } = req.body;
      let kq = [];

      let temp = [];
      for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);

        if (temp.length == index) {
          kq.push(temp);
          temp = [];
        }
      }
      kq.push(temp);

      res.status(200).json(kq);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  gb: (req, res) => {
    try {
      let { arr, index } = req.body;
      let opjectkq = {};
      let arrayvalue = [];
      let target;
      for (let i = 0; i < arr.length; i++) {
        target = arr[i][index];
        if (target in opjectkq) {
          opjectkq[target].push(arr[i]);
        } else if (!(target in opjectkq)) {
          arrayvalue.push(arr[i]);
          opjectkq[target] = arrayvalue;
          arrayvalue = [];
        }
      }
      res.status(200).json(opjectkq);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  mapkey: (req, res) => {
    try {
      let { arr, key } = req.body;
      let aray = [];
      let opject = {};
      for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < key.length; i++) {
          opject[key[i]] = arr[j][key[i]];
        }
        aray.push(opject);
        opject = {};
      }

      res.status(200).json(aray);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  reverse: (req, res) => {
    try {
      let { arr } = req.body;
      let reversed = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
      }

      res.status(200).json(reversed);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  swithorder : (req, res) => {
    try {
        let { arr, id,order } = req.body;
        let temp;
        let pid;
        let porder;
      
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id == id) {
            pid = i;
      
            temp = {...arr[i]};
          }
          if (arr[i].order == order) {
            porder = i;
          }
        }
        arr[pid].id = arr[porder].id 
        arr[porder].id = temp.id 
        
      res.status(200).json(arr);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  trim: (req, res) => {
    try {
        let {str} = req.body
        let aray =  str.split(" ")
        let kq = []
        for(let i = 0;i<aray.length;i++){
          if(aray[i].length>1){
            kq.push(aray[i])
          }
        }
        let kqnew= kq.join(" ")
      res.status(200).json(kqnew);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  uniq: (req, res) => {
    try {
        let {arr} =req.body
        let kq = []
  for(let i = 0;i<arr.length;i++){
    if(!kq.includes(arr[i])){
      kq.push(arr[i])
    }
  }
    console.log(kq);
      res.status(200).json(kq);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = arrayobject;
