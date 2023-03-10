import {useEffect} from 'react'
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from 'react-redux';
import  {getUserCategory}  from '../../slice/userSlice/userSlice';

const HomePage = () => {
  const { userCat } = useSelector(store => store.usercategory);
    const dispatch = useDispatch();

  useEffect(() => {
    // console.log('user');
    dispatch(getUserCategory ());
  }, []);
     
    
  return (
      <div style={{display: "flex", justifyContent:"", flexWrap:"wrap"}}>
          {userCat && userCat?.map((item) => {
              return (
                  <Card style={{margin:"5px"}} key={item._id} >
                      {item && item?.category_image && item.category_image ? (
                          <img style={{width:"200px"}}
                              className="custom-card-img rounded-1"
                              src={
                                  "http://chapshop.softprodigyphp.in/uploads/" +
                                  `${item &&
                                  item?.category_image &&
                                  item.category_image?.filename &&
                                  item.category_image.filename
                                  }`
                              }
                              alt={item?.product_name}
                          />
                      ) : ""}


                      <CardContent >
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            {item.category_name}
          </Typography>
              </CardContent>
                  </Card>
                          
              )
          })}  
        
      </div>
    
    )
}

export default HomePage