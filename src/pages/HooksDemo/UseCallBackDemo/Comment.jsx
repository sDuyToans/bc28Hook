import React, {memo} from "react";

function Comment({renderLike}) {
    console.log('comment')
  return (
    <div>
      {renderLike()}
      <br />
      <button>Gửi</button>
    </div>
  );
}

export default memo(Comment);
