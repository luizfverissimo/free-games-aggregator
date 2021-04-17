import {attributes, html} from '../content/endSection.md'

function EndSection() {
  return (
    <section className='w-full max-w-[1440px] flex flex-col items-center my-8'>
      <div className='w-full flex justify-between'>
        <div className='donate max-w-[75ch]' dangerouslySetInnerHTML={{__html: html}}>
        </div>
        <div className='bg-gray-400 mt-8 w-[300px] h-[250px]' />
      </div>
    </section>
  );
}

export default EndSection;
