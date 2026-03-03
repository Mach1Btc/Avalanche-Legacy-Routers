import { useUserContext } from '@/context/AuthContext';

const AAdsComponent = () => {
 const { adsEnabled } = useUserContext();
    if (!adsEnabled) return null;
  return (
      <div
          id="frame"
          style={{
              width: '100%',
              margin: 'auto',
              position: 'relative',
              zIndex: 99998,
          }}
      >
          <iframe
              data-aa="2429341"
              src="//acceptable.a-ads.com/2429341/?size=Adaptive"
              style={{
                  border: 0,
                  padding: 0,
                  width: '70%',
                  height: 'auto',
                  overflow: 'hidden',
                  display: 'block',
                  margin: 'auto',
              }}
          />
      </div>
  )
}

export default AAdsComponent