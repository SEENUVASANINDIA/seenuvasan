import React, { Component } from 'react'

const Tablehead = () =>{
  return(
<thead>
<tr>

  <th>
head1


  </th>
   
   <th> head2</th>
   <th> head3</th>
</tr>

<tr>
<td>

  data1
</td>

</tr>

</thead>

  );
};



class Table extends Component {
  render() {
    return (
      <table>
<Tablehead/>

      </table>
     


      

    );
  }
}

export default Table