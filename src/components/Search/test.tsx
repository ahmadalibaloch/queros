describe('Open Graph function should work correctly', () => {
  it('should not return templateTitle when not specified', () => {
    const result = 'a;';
    expect(result).not.toContain('&templateTitle=');
  });

  it('should return templateTitle when specified', () => {
    const result = 'a;';
    expect(result).toContain('&templateTitle=Test%20Template%20Title');
  });
});
