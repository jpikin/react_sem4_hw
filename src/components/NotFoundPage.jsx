import '../notFoundPage.css'

function NotFoundPage() {
    return (
      <>

        <h1 className='h1'>
          404
          <span aria-hidden="true">404</span>
        </h1>
        <div className="cloak__wrapper">
          <div className="cloak__container">
            <div className="cloak"></div>
          </div>
        </div>
        <div className="info">          
        </div>
      </>
    );
  }
  
  export default NotFoundPage;