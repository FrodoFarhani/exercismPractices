import Bob from './bob';

describe('Bob', () => {
  const bob = new Bob();

  it('stating something', async () => {
    const result = await bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  it('shouting', async () => {
    const result = await bob.hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting gibberish', async () => {
    const result = await bob.hey('FCECDFCAAB');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('asking a question', async () => {
    const result = await bob.hey(
      'Does this cryogenic chamber make me look fat?'
    );
    expect(result).toEqual('Sure.');
  });

  it('asking a numeric question', async () => {
    const result = await bob.hey('You are, what, like 15?');
    expect(result).toEqual('Sure.');
  });

  it('asking gibberish', async () => {
    const result = await bob.hey('fffbbcbeab?');
    expect(result).toEqual('Sure.');
  });

  it('talking forcefully', async () => {
    const result = await bob.hey("Let's go make out behind the gym!");
    expect(result).toEqual('Whatever.');
  });

  it('using acronyms in regular speech', async () => {
    const result = await bob.hey("It's OK if you don't want to go to the DMV.");
    expect(result).toEqual('Whatever.');
  });

  it('forceful question', async () => {
    const result = await bob.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual("Calm down, I know what I'm doing!");
  });

  it('shouting numbers', async () => {
    const result = await bob.hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('no letters', async () => {
    const result = await bob.hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  it('question with no letters', async () => {
    const result = await bob.hey('4?');
    expect(result).toEqual('Sure.');
  });

  it('shouting with special characters', async () => {
    const result = await bob.hey(
      'ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!'
    );
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting with no exclamation mark', async () => {
    const result = await bob.hey('I HATE THE DMV');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('statement containing question mark', async () => {
    const result = await bob.hey('Ending with ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  it('prattling on', async () => {
    const result = await bob.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  it('silence', async () => {
    const result = await bob.hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('prolonged silence', async () => {
    const result = await bob.hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('alternate silence', async () => {
    const result = await bob.hey('\t\t\t\t\t\t\t\t\t\t');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('multiple line question', async () => {
    const result = await bob.hey(
      '\nDoes this cryogenic chamber make me look fat?\nNo.'
    );
    expect(result).toEqual('Whatever.');
  });

  it('starting with whitespace', async () => {
    const result = await bob.hey('         hmmmmmmm...');
    expect(result).toEqual('Whatever.');
  });

  it('ending with whitespace', async () => {
    const result = await bob.hey('Okay if like my  spacebar  quite a bit?   ');
    expect(result).toEqual('Sure.');
  });

  it('other whitespace', async () => {
    const result = await bob.hey('\n\r \t');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('non-question ending with whitespace', async () => {
    const result = await bob.hey(
      'This is a statement ending with whitespace      '
    );
    expect(result).toEqual('Whatever.');
  });
});
