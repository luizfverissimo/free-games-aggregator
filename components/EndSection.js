import {attributes, html} from '../content/endSection.md'

function EndSection() {
  return (
    <section className='w-full flex flex-col items-center my-8 xl:max-w-[1440px]'>
      <div className='w-full px-8 flex flex-col-reverse items-center justify-between xl:flex-row xl:items-start xl:px-0'>
        <div className='donate w-full sm:max-w-[75ch] ' dangerouslySetInnerHTML={{__html: html}}>
        </div>
        <div className='bg-gray-400 mt-8 w-[300px] h-[250px] mb-8' />
      </div>
    </section>
  );
}

export default EndSection;
