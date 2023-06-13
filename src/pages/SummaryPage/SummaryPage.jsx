import React, { useState } from 'react';

const SummaryPage = () => {
  const [checked, setCheked] = useState(false);

  return (
    <div>
      <form action="">
        <input
          type="checkbox"
          name="checkbox"
          id="confirm-checkbox"
          checked={checked}
          onChange={(e) => setCheked(e.target.checked)}
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
