The solution involves checking if `data` is null before accessing its properties.  Here's the corrected code:

```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('some_api_endpoint')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      {data ? <Text>{data.someProperty}</Text> : <Text>Loading...</Text>}
    </View>
  );
};
```

This version uses a ternary operator to conditionally render the `Text` component.  If `data` is not null, it renders the text; otherwise, it renders a 'Loading...' message.  Alternatively, optional chaining could be used: `data?.someProperty`.