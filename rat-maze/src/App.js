import logo from './logo.svg';
import './App.css';



function App() {






  var totalblocks = []
  for (let i = 0; i < 30; i++) {

    totalblocks.push(i)

  }

  console.log(totalblocks);
  return (


    <div className="mx-40 my-5 px-2 py-2 "  >
      <div>


        {
          totalblocks.map((h, row) => (
            <div className="flex">
              {
                totalblocks.map((k, col) => (

                  <div className="border border-2 h-5 w-5 bg-indigo-400" id={30 * row + col}>  </div>

                ))
              }



            </div>
          ))

        }

      </div>





      {/* <div className="grid grid-cols-12 m-0    ">



        {
          totalblocks.map((h, index) => (

            <div className="bg-indigo-400 h-8 w-8  flex justify-center border border-2 " id={index}>

            </div>

          ))
        }




      </div> */}









    </div>
  );
}

export default App;
