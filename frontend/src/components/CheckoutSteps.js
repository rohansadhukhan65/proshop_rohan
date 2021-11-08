import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>

        {/* First step of checkout =================================== */}
          <Nav.Item>
            {step1 ? (
              <LinkContainer to='/login'>
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>
            ) : (
              <Nav.Link disabled>Sign In</Nav.Link>
            )}
          </Nav.Item>
        {/* First step of checkout End =================================== */}


        {/* Second step of checkout =================================== */}
        <Nav.Item>
          {step2 ? (
            <LinkContainer to='/shipping'>
              <Nav.Link>Shipping</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Shipping</Nav.Link>
          )}
        </Nav.Item>
        {/* Second step of checkout End =================================== */}


        {/* Third step of checkout =================================== */}
        <Nav.Item>
          {step3 ? (
            <LinkContainer to='/payment'>
              <Nav.Link>Payment</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Payment</Nav.Link>
          )}
        </Nav.Item>
        {/* Third step of checkout End =================================== */}


        {/* Fourth step of checkout =================================== */}
        <Nav.Item>
          {step4 ? (
            <LinkContainer to='/placeorder'>
              <Nav.Link>Place Order</Nav.Link>
            </LinkContainer>
          ) : (
            <Nav.Link disabled>Place Order</Nav.Link>
          )}
        </Nav.Item>
        {/* Fourth step of checkout End =================================== */}

    </Nav>
  )
}

export default CheckoutSteps
