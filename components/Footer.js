import {attributes, html} from '../content/footer.md'

function Footer() {
  return (
    <section className='w-full max-w-[1440px] flex flex-col items-center my-8'>
      <div className='w-full flex justify-between'>
        <div className='donate w-1/2' dangerouslySetInnerHTML={{__html: html}}>
        </div>
        <div className='bg-gray-400 mt-8 w-[300px] h-[250px]' />
      </div>
    </section>
  );
}

export default Footer;
