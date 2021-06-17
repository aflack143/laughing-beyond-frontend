import React, {useState, useEffect} from 'react'

// const HomeButton = () => {
//     const style = {
//         display: 'inline-block',
//         backfaceVisibility: 'hidden',
//         transform: isClicked ? 'rotate('
//     }
//     return (
//         <div>

//         </div>
//     )
// }


const Boop = ({ rotation = 0, timing = 150, children }) => {
    const [isBooped, setIsBooped] = useState(false);
    const style = {
      // position: 'absolute',
      display: 'inline-block',
      backfaceVisibility: 'hidden',
      backgroundColor: 'yellow',
      transform: isBooped
        ? `rotateY(${rotation}deg)`
        : `rotateY(0deg)`,
      transition: `transform ${timing}ms`,
      borderRadius: '100%',
    };
   useEffect(() => {
      if (!isBooped) {
        return;
      }
      const timeoutId = window.setTimeout(() => {
        setIsBooped(false);
      }, timing);
      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [isBooped, timing]);
    const trigger = () => {
      setIsBooped(true);
    };
    return (
      <span onMouseEnter={trigger} style={style}>
        {children}
      </span>
    );
  };


  export default Boop