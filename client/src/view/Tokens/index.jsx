import React,{ useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import Card from "../../Components/TokenCard"
import { fetchTokens } from '../../features/token/token.Service'

function TokensList() { 
  const dispatch = useDispatch();
  const tokens = useSelector((state) => state.tokens.tokens);

  useEffect(() => {
    dispatch(fetchTokens());
  }, [dispatch]);

  function handileGetTokens () {
    console.log("gettoken function called")
    dispatch(fetchTokens())
  }

  return (
    <div>
    <h1>Token Dashboard</h1>
    {tokens && tokens.length > 0 ? (
        tokens.map((token) => (
          <Card
            key={token.id}
            name={token.queue}
            owner={token.owner} // Assuming each token has a unique identifier
            number={token.tokenNumber}
          />
        ))
      ) : (
        <div>
        <p>Loading tokens...</p>
        <button onClick={handileGetTokens}>load more</button>
        </div>
      )}

      </div>
  )
}

export default TokensList